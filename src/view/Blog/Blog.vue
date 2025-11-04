<template>
    <div class="max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto px-6 py-10 mt-5 rounded-xl bg-gray-200">
        <header class="mb-10">
            <h1 class="text-black text-title font-extrabold leading-tight ">
                How I Fixed Race Conditions in My PHP Download System <br />
            </h1>
            <p class="mt-3 text-gray-900 text-intro">I just build a simple endpoint
                turned
                into one of the
                heaviest backend challenges — and a deep lesson of concurrency.</p>
        </header>

        <section class="space-y-10 text-in-border">
            <!-- Problem Intro -->
            <article class="prose prose-neutral text-gray-900 bg-gray-300 space-y-4 p-5 rounded-lg">
                <p>At first, everything worked fine in testing. But when multiple downloads happened at once, strange
                    things started appearing:</p>
                <ul>
                    <li>- Missing audit logs</li>
                    <li>- Download counter didn’t match real access</li>
                    <li>- Duplicate contract downloads in parallel</li>
                    <li>- Temporary URLs still valid long after expiration</li>
                </ul>
                <p>It got something like headache. So I decided to rebuild it to be <strong>atomic, concurrent-safe, and
                        reliable</strong>.</p>
            </article>

            <!-- The Problem -->
            <article class="text-black">
                <h2 class="text-important font-semibold mb-3">The Problem That Looked Simple</h2>
                <p>Here was my original flow:</p>
                <ol class="list-decimal ml-6">
                    <li>User or contract requests <code>/download/{fileId}</code></li>
                    <li>Log access in <code>download_audits</code></li>
                    <li>Increment <code>file.download_count</code></li>
                    <li>Return URL from storage</li>
                </ol>

                <pre class="text-code"><code>$file = File::find($fileId);
$file->download_count++;
$file->save();

AuditLog::create([
  'file_id' => $fileId,
  'user_id' => $userId,
]);

return response()->json(['url' => $storage->url($file->path)]);
</code></pre>

                <p class="mt-4 text-gray-700">Everything looked fine — until concurrency kicked in. Requests raced each
                    other, overwriting data and leaving inconsistent audit logs.</p>
            </article>

            <!-- Understanding the Issue -->
            <article>
                <div class="space-y-4 text-black">
                    <h2 class="text-important font-semibold mb-3 capitalize">Understanding What is Wrong with This</h2>
                    <p>Under load, multiple requests read and wrote the same record at once. The result: incorrect
                        counts
                        and missing audit data.</p>
                    <pre class="bg-gray-300 text-gray-800 p-4 rounded-md text-sm overflow-auto">
1. Two requests read the same value (count = 4)
2. Both increment to 5
3. Both save → one overwrites the other
4. Final count: 5, but 2 downloads happened
        </pre>
                    <p>Without transactions, one part could fail while the other succeeded — breaking logic for metrics
                        and
                        billing.</p>
                </div>

            </article>

            <!-- Step 1 -->
            <article class="space-y-3 text-black">
                <h2 class="text-lg font-semibold">Step 1 — I Make Increment Download Count</h2>
                <p>Replace the read-modify-write pattern with a direct SQL update:</p>
                <pre class="text-code"><code>DB::table('files')
  ->where('id', $fileId)
  ->update(['download_count' => DB::raw('download_count + 1')]);</code></pre>
            </article>

            <!-- Step 2 -->
            <article class="space-y-3 text-black">
                <h2 class="text-lg font-semibold">Step 2 — Wrap Count + Audit in One Transaction</h2>
                <p>Ensure both succeed or fail together:</p>
                <pre class="text-code"><code>DB::transaction(function () use ($file, $userId) {
  DB::table('files')
    ->where('id', $file->id)
    ->update(['download_count' => DB::raw('download_count + 1')]);

  DB::table('download_audits')->insert([
    'file_id' => $file->id,
    'user_id' => $userId,
    'accessed_at' => now(),
    'type' => 'user',
  ]);
});</code></pre>
            </article>

            <!-- Step 3 -->
            <article class="space-y-3 text-black">
                <h2 class="text-lg font-semibold">Step 3 — Add Redis Lock for Contract Downloads</h2>
                <p>Prevent duplicate downloads triggered by concurrent contract requests:</p>
                <pre class="text-code"><code>$lockKey = "download:contract:{$contractId}:{$fileId}";
$lock = $redis->set($lockKey, '1', ['nx', 'ex' => 5]); // 5s lock

if (!$lock) {
  throw new ConflictException("Download already in progress");
}

try {
  processDownload($contractId, $fileId);
} finally {
  $redis->del($lockKey);
}</code></pre>
            </article>

            <!-- Step 4 -->
            <article class="space-y-3 text-black">
                <h2 class="text-lg font-semibold">Step 4 — Secure Temporary URLs</h2>
                <p>Generate signed URLs that expire after 5 minutes:</p>
                <pre
                    class="text-code"><code>$url = $storage->temporaryUrl($file->path, now()->addMinutes(5));</code></pre>
                <ul class="list-disc ml-5 text-gray-800 text-md">
                    <li>Prevents sharing</li>
                    <li>Forces revalidation</li>
                    <li>Keeps backend control</li>
                </ul>
            </article>

            <!-- Step 5 -->
            <article class="space-y-3 text-black">
                <h2 class="text-lg font-semibold">Step 5 — Stress Test Everything</h2>
                <pre class="text-code">
Before fix:
Expected count: 50
Actual count: 34 => is not same!

After fix:
Expected count: 50
Actual count: 50 => yuhuuu! correctly!
        </pre>
            </article>

            <!-- What I Learned -->
            <article class="bg-indigo-50 border border-indigo-100 rounded-lg p-5">
                <h2 class="font-semibold text-2xl text-indigo-900 mb-3">What I Learned</h2>
                <ul class="list-disc ml-5 text-md text-blue-900">
                    <li>Concurrency shows up only at scale.</li>
                    <li>Transactions keep side effects consistent.</li>
                    <li>Atomic DB ops prevent overwrites.</li>
                    <li>Distributed locks coordinate shared actions.</li>
                    <li>Observability = reliability.</li>
                </ul>
            </article>

            <!-- Closing Thoughts -->
            <article class="border-t border-gray-200 pt-5 space-y-6 mb-12">
                <p class="text-gray-900 text-md italic underline mt-2">This experience changed how I design backend
                    systems. Now
                    every
                    time I write shared-state logic, I ask myself:</p>
                <blockquote class="border-l-4 border-indigo-900 pl-4 italic text-gray-700">“What happens if two requests
                    do this at the exact same millisecond?”</blockquote>
            </article>
        </section>
    </div>
</template>


<script>
export default {
    name: "Blog"
}
</script>

<style scoped></style>
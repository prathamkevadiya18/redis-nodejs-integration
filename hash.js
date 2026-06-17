const client = require('./redis')

async function hashOps(){
    // Setup some initial values in hash
    const r0 = await client.hset("user:1", "name", "pratham");
    console.log(r0);

    // 1. HDEL
    // Set another field first to delete
    await client.hset("user:1", "age", "20");
    const r1 = await client.hdel("user:1", "age");
    console.log(r1);

    // 2. HEXISTS
    const r2 = await client.hexists("user:1", "name");
    console.log(r2);

    // 3. HGET
    const r3 = await client.hget("user:1", "name");
    console.log(r3);

    // 4. HGETALL
    const r4 = await client.hgetall("user:1");
    console.log(r4);

    // 5. HINCRBY
    await client.hset("user:1", "visits", "10");
    const r5 = await client.hincrby("user:1", "visits", 5);
    console.log(r5);

    // 6. HINCRBYFLOAT
    await client.hset("user:1", "balance", "100.5");
    const r6 = await client.hincrbyfloat("user:1", "balance", 10.5);
    console.log(r6);

    // 7. HKEYS
    const r7 = await client.hkeys("user:1");
    console.log(r7);

    // 8. HLEN
    const r8 = await client.hlen("user:1");
    console.log(r8);

    // 9. HMGET
    const r9 = await client.hmget("user:1", "name", "visits");
    console.log(r9);

    // 10. HMSET
    const r10 = await client.hmset("user:1", "country", "India", "city", "Mumbai");
    console.log(r10);

    // 11. HSET
    const r11 = await client.hset("user:1", "occupation", "developer");
    console.log(r11);

    // 12. HSETNX
    const r12 = await client.hsetnx("user:1", "name", "newname");
    console.log(r12);

    // 13. HVALS
    const r13 = await client.hvals("user:1");
    console.log(r13);

    // 14. HSCAN
    const r14 = await client.hscan("user:1", 0, "MATCH", "*", "COUNT", 10);
    console.log(r14);

    // Cleanup
    await client.del("user:1");

    client.disconnect();
}

hashOps();

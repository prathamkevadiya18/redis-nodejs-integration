const client = require('./redis')

async function pqr(){
    // Setup some initial values in sets
    const r0 = await client.sadd("set1", "a", "b", "c");
    console.log(r0);

    // 1. SADD
    const r1 = await client.sadd("set1", "d");
    console.log(r1);

    // 2. SCARD
    const r2 = await client.scard("set1");
    console.log(r2);

    // 3. SDIFF
    // Setup another set to compare
    await client.sadd("set2", "b", "c", "e");
    const r3 = await client.sdiff("set1", "set2");
    console.log(r3);

    // 4. SDIFFSTORE
    const r4 = await client.sdiffstore("set3", "set1", "set2");
    console.log(r4);

    // 5. SINTER
    const r5 = await client.sinter("set1", "set2");
    console.log(r5);

    // 6. SINTERSTORE
    const r6 = await client.sinterstore("set4", "set1", "set2");
    console.log(r6);

    // 7. SISMEMBER
    const r7 = await client.sismember("set1", "a");
    console.log(r7);

    // 8. SMEMBERS
    const r8 = await client.smembers("set1");
    console.log(r8);

    // 9. SMOVE
    const r9 = await client.smove("set1", "set2", "a");
    console.log(r9);

    // 10. SPOP
    const r10 = await client.spop("set1");
    console.log(r10);

    // 11. SRANDMEMBER
    const r11 = await client.srandmember("set2", 2);
    console.log(r11);

    // 12. SREM
    const r12 = await client.srem("set2", "b");
    console.log(r12);

    // 13. SUNION
    const r13 = await client.sunion("set1", "set2");
    console.log(r13);

    // 14. SUNIONSTORE
    const r14 = await client.sunionstore("set5", "set1", "set2");
    console.log(r14);

    // 15. SSCAN
    const r15 = await client.sscan("set2", 0, "MATCH", "*", "COUNT", 10);
    console.log(r15);

    // Cleanup
    await client.del("set1", "set2", "set3", "set4", "set5");

    client.disconnect();
}

pqr();

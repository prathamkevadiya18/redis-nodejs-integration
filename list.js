const client = require('./redis')

async function xyz(){
    // Setup some initial values in lists
     const r0= await client.rpush("list1", "a", "b", "c");
     console.log(r0);
     
    // 1. BLPOP
    const r1 = await client.blpop("list1", 1);
    console.log(r1);

    // 2. BRPOP
    const r2 = await client.brpop("list1", 1);
    console.log(r2);

    // 3. BRPOPLPUSH
    const r3 = await client.brpoplpush("list1", "list2", 1);
    console.log(r3);

    // 4. LINDEX
    const r4 = await client.lindex("list2", 0);
    console.log(r4);

    // 5. LINSERT
    const r5 = await client.linsert("list2", "BEFORE", "b", "inserted-val");
    console.log(r5);

    // 6. LLEN
    const r6 = await client.llen("list2");
    console.log(r6);

    // 7. LPOP
    const r7 = await client.lpop("list2");
    console.log(r7);

    // 8. LPUSH
    const r8 = await client.lpush("list2", "x", "y");
    console.log(r8);

    // 9. LPUSHX
    const r9 = await client.lpushx("list2", "z");
    console.log(r9);

    // 10. LRANGE
    const r10 = await client.lrange("list2", 0, -1);
    console.log(r10);

    // 11. LREM
    const r11 = await client.lrem("list2", 0, "x");
    console.log(r11);

    // 12. LSET
    const r12 = await client.lset("list2", 0, "updated-val");
    console.log(r12);

    // 13. LTRIM
    const r13 = await client.ltrim("list2", 0, 1);
    console.log(r13);

    // 14. RPOP
    const r14 = await client.rpop("list2");
    console.log(r14);

    // 15. RPOPLPUSH
    // First push to list2 so we can pop from it
    await client.rpush("list2", "element");
    const r15 = await client.rpoplpush("list2", "list1");
    console.log(r15);

    // 16. RPUSH
    const r16 = await client.rpush("list1", "m", "n");
    console.log(r16);

    // 17. RPUSHX
    const r17 = await client.rpushx("list1", "o");
    console.log(r17);

    // Cleanup
    await client.del("list1", "list2");

    client.disconnect();
}
xyz()
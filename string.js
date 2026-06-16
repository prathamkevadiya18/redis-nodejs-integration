const client = require('./redis');

async function abc(){
    // 1. SET
    const r1 = await client.set("name:1", "pratham");
    console.log(r1);

    // 2. GET
    const r2 = await client.get("name:1");
    console.log(r2);

    // 3. GETRANGE
    const r3 = await client.getrange("name:1", 0, 3);
    console.log(r3);

    // 4. GETSET
    const r4 = await client.getset("name:1", "singh");
    console.log(r4);

    // 5. GETBIT
    const r5 = await client.getbit("name:1", 0);
    console.log(r5);

    // 6. MGET
    const r6 = await client.mget("name:1", "name:2");
    console.log(r6);

    // 7. SETBIT
    const r7 = await client.setbit("name:1", 0, 1);
    console.log(r7);

    // 8. SETEX
    const r8 = await client.setex("name:temp", 10, "temporary");
    console.log(r8);

    // 9. SETNX
    const r9 = await client.setnx("name:1", "newval");
    console.log(r9);

    // 10. SETRANGE
    const r10 = await client.setrange("name:1", 0, "hello");
    console.log(r10);

    // 11. STRLEN
    const r11 = await client.strlen("name:1");
    console.log(r11);

    // 12. MSET
    const r12 = await client.mset({"name:4": "a", "name:5": "b"});
    console.log(r12);

    // 13. MSETNX
    const r13 = await client.msetnx({"name:7": "x", "name:8": "y"});
    console.log(r13);

    // 14. PSETEX
    const r14 = await client.psetex("name:ptemp", 1, "tempval");
    console.log(r14);

    // 15. INCR
    const r15 = await client.incr("counter");
    console.log(r15);

    // 16. INCRBY
    const r16 = await client.incrby("counter", 5);
    console.log(r16);

    // 17. INCRBYFLOAT
    const r17 = await client.incrbyfloat("counter", 2.5);
    console.log(r17);

    // 18. DECR
    const r18 = await client.decr("counter_decr");
    console.log(r18);

    // 19. DECRBY
    const r19 = await client.decrby("counter_decr", 5);
    console.log(r19);

    // 20. APPEND
    const r20 = await client.append("name:1", "world");
    console.log(r20);

    client.disconnect();
}

abc();
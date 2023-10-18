import sayHello from '../utils/helloworld.mjs';
import assert from 'assert';

it("Hello Mike", () => {
    const hello = sayHello();
    const name = "Mike's Test";

    assert.equal(hello, "hello");

    console.log(name);
    console.log();
});
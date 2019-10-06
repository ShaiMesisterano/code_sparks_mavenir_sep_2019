const mockFn = jest.fn();

const a = new mockFn();
const b = new mockFn();

test('instances', function () {
    expect(mockFn.mock.instances[0]).toBe(a);
    expect(mockFn.mock.instances[1]).toBe(b);
});
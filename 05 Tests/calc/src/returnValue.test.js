const mock = jest.fn();
mock.mockReturnValue(42);
test('mock', function () {
    expect(mock()).toBe(42);
});

test('async resolve test', () => {
    const value = 42;
    const asyncResolveMock = jest.fn().mockResolvedValue(value);

    expect(asyncResolveMock()).resolves.toEqual(value);
});

test('async reject test', () =>{
    const error = 'Async error';
    const asyncRejectMock = jest.fn().mockRejectedValue(error);

    expect(asyncRejectMock()).rejects.toEqual(error);
});
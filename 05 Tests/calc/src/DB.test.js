jest.mock('./DB');
const DB = require('./DB');

const mockFunction = (username, password) => ({
    username: `${username} from mock`,
    pass: `${password} from mock`
});

const connectMock = jest.fn().mockImplementation(mockFunction);

DB.mockImplementation( () => {
    return {
        connect: connectMock
    }
});

// Testing
const db = new DB();
const connection = db.connect('jimmy', '1234');
test('mock function', () => {
    expect(connection.username).toBe('jimmy from mock');
    expect(connection.pass).toBe('1234 from mock');
});

test('connectMock calls', () => {
    expect(connectMock.mock.calls[0][0]).toBe('jimmy');
    expect(connectMock.mock.calls[0][1]).toBe('1234');
})
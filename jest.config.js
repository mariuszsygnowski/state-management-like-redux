module.exports = {
    "moduleNameMapper": {
            "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js"
    },
    "testURL": "http://localhost/",
    "setupFiles": [
        '<rootDir>/tests/setup.js'
    ]
}
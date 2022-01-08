import React from 'react';

describe('JSX', () => {
  it('calls React.createElement', () => {
    const createElementSpy = jest.spyOn(React, 'createElement'); // 1
    <h2>Hello, JSX!</h2>;
    expect(createElementSpy).toHaveBeenCalledWith('h2', null, 'Hello, JSX!'); // 2
  });
});

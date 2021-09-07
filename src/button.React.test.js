import React from "react";
import Button from './Components/SearchBtn'
import Renderer from 'react-test-renderer'

it('Search button rendered correctly', () => {
    const tree = Renderer
        .create(<Button />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})
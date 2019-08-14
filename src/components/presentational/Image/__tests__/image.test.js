import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Image from '../Image';

describe('Image Tests', () => {
  const dummyImageUrl = 'https://via.placeholder.com/600/d32776';
  const className = 'test-class';

  afterEach(cleanup);

  it('renders image correctly', async () => {
    const { container } = render(<Image src={dummyImageUrl} />);
    expect(container.querySelectorAll('img').length).toBe(1);
  });

  it('renders image with correct source', async () => {
    const { container } = render(<Image src={dummyImageUrl} />);
    expect(container.querySelectorAll('img')[0].src).toBe(dummyImageUrl);
  });

  it('renders image with correct className', async () => {
    const { container } = render(<Image src={dummyImageUrl} className={className}/>);
    expect(container.querySelectorAll('img')[0].className).toBe(className);
  });

  it('renders image with onClick event listener', async () => {
    const onClickFn = jest.fn()
    const { container } = render(<Image src={dummyImageUrl} onClick={onClickFn} />);
    fireEvent(container.querySelectorAll('img')[0], new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));
    expect(onClickFn.mock.calls.length).toBe(1);
  });
});

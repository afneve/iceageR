import { render, screen, fireEvent } from '@testing-library/react';

import Progress from '../Progress';

const mockedSetTodo = jest.fn();

describe('Progress table', () => {
    it('should render Progress and table', () => {
        render(
            <Progress />
        );

        const tableHeading = screen.getByTestId('Progress')
        
        expect(tableHeading).toBeInTheDocument()
    });

    it('should change segment direction', () => {
        render(
            <Progress />
        );
        
        const tableHeading = screen.getByTestId('Segment-heading');
        fireEvent.click(tableHeading)

        expect(tableHeading.textContent).toBe('Segment (East to West)')
    });

    it('should change segment direction back', () => {
        render(
            <Progress />
        );
        
        const tableHeading = screen.getByTestId('Segment-heading');
        fireEvent.click(tableHeading)
        fireEvent.click(tableHeading)

        expect(tableHeading.textContent).toBe('Segment (West to East)')
    });
});


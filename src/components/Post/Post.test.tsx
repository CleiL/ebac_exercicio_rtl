import { render, screen } from '@testing-library/react';
import Post from '.';

describe('Test <Post />', () => {
    it('Expect render correctly', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/300x300">
                Teste
            </Post>
        );
        expect(screen.getByText('Teste')).toBeInTheDocument();
    });
})
import { render, screen } from '@testing-library/react';
import Post from '.';

describe('Test <Post />', () => {
    it('Expect render correctly', () => {
        render(
            <Post imageUrl="https://th.bing.com/th?id=OIP.1m052NUg8zmJMnSf5M9X0AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2">
                Testes
            </Post>
        );
        expect(screen.getByText('Teste')).toBeInTheDocument();
    });
})
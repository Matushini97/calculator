import { RouterProvider } from 'react-router-dom';
import { router } from '../../constants/router';
import { classNames } from '../../utils/classNames';
import { useTheme } from '../../hooks/useTheme';

function App() {
  const { theme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
        <RouterProvider router={router} />
    </div>
  )
}

export default App

import { Outlet } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'

export const appRoutes = [
	{
		path: '/',
		element: (
			<Layout>
				<Outlet />
			</Layout>
		),
		children: [
			{
				path: '*',
				element: <PageNotFound />,
			},
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/histPlace/:histPlaceId',
				element: <HistPlacePage />,
			},
			{
				path: '/AllHistPlacesPage',
				element: <AllHistPlacesPage />,
			},
		],
	},
]

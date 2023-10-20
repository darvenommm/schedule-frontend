import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from '../components/layout/Layout'
import { Auth } from '../pages/Auth'
import { PageNotFound } from '../pages/PageNotFound'
import Profile from '../pages/Profile'
import { Register } from '../pages/Register'

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
				path: 'auth',
				element: <Auth />,
			},
            {
				path: 'register',
				element: <Register />,
			},
            {
				path: 'profile',
				element: <Profile />,
			},
		],
	},
]

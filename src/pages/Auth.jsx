import { Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import Logo from '../assets/UNiVERSiTY.svg'
import '../index.css'

const formCommentSchema = yup.object().shape({
	email: yup.string().required('Поле Email необходимо заполнить'),
	password: yup.string().required('Поле Пароль необходимо заполнить'),
})
export const Auth = () => {
	const [file, setFile] = useState(null)

	const onSubmitHandlerComment = async (values, { resetForm }) => {
		const { email, password } = values
		console.log(values)

		// createComment(histPlaceId, {
		// 	email,
		// 	password,
		// }).then(resp => {
		// 	console.log(resp)

		// 	getHistPlace(histPlaceId).then(resp => {
		// 		if (resp.status === 200) {
		// 			setCommentsFresh(resp.data.comments)
		// 		}
		// 	})
		// 	resetForm()
		// })
	}

	return (
		<div className='auth'>
			<div className='auth-wrapper'>
				<div className='auth__logo'>
					<img src={Logo} alt='' />
				</div>
				<h3 className='auth__title'>авторизоваться</h3>
				<Formik
					initialValues={{
						email: '',
						password: '',
					}}
					validationSchema={formCommentSchema}
					onSubmit={onSubmitHandlerComment}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
					}) => (
						<form className='auth__form' onSubmit={handleSubmit} method='post'>
							{touched.email && errors.email && (
								<span style={{ color: 'tomato' }}>{errors.email}</span>
							)}
							<div className='auth__form__item'>
								<p>email</p>
								<input
									value={values.nickName}
									onChange={handleChange}
									onBlur={handleBlur}
									placeholder='Ваше имя'
									type='text'
									name='email'
								></input>
							</div>
							{touched.password && errors.password && (
								<span style={{ color: 'tomato' }}>{errors.password}</span>
							)}
							<div className='auth__form__item'>
								<p>введите пароль</p>
								<input
									value={values.message}
									onChange={handleChange}
									onBlur={handleBlur}
									type='text'
									name='password'
									placeholder='Ваш отзыв'
									rows={2}
								></input>
							</div>
							<div className='auth__form__send'>
								<button type='submit'>войти</button>
							</div>
						</form>
					)}
				</Formik>
        <p className='auth__text'>нет аккаунта?<Link className='auth__link' to="/register"><span>Зарегистрироваться</span></Link></p>
			</div>
		</div>
	)
}

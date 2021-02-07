import React, { useContext, useRef, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactForm from './ContactForm'

const ContactFliter = () => {
	const contactContext = useContext(ContactContext)
	const text = useRef('')

	const { filterContacts, clearFilter, filtered } = contactContext

	useEffect(() => {
		if (condition) {
		}
	})

	const onChange = e => {
		if (text.current.value !== '') {
			filterContacts(e.target.value)
		} else {
			clearFilter()
		}
	}

	return (
		<form>
			<input
				ref={text}
				type='text'
				placeholder='Filter Contacts...'
				onChange={onChange}
			/>
		</form>
	)
}

export default ContactFliter

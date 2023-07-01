import { object, string } from 'yup'

export const CreateTodoSchema = object({
	title: string().required('title is a mandatory field'),
})

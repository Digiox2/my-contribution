import { useToasts } from 'react-toast-notifications'

const toastNotification = (content, type, autoDismiss) => {
    const { addToast } = useToasts()
    addToast(content, {
        appearance: type,
        autoDismiss: autoDismiss
    })
}

export default toastNotification;
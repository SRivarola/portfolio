import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const alertMessage = (icon, message, color) => {
    MySwal.fire({
        title: <p>{message}</p>,
        color: '#000',
        icon: icon,
        iconColor: color,
        background: '#fff',
        showConfirmButton: false,
        toast: true,
        timer: '2000',
        timerProgressBar: true,
        position: 'bottom-end',
    })
}
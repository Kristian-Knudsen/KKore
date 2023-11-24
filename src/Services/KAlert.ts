import Swal, { SweetAlertIcon } from 'sweetalert2';

/* eslint-disable @typescript-eslint/no-explicit-any */
export const KAlert = (type: SweetAlertIcon = 'warning', title: string, text: any = '') => {
    if (!['success', 'error', 'warning', 'info', 'question'].includes(type)) {
        KAlert('error', 'Invalid type selected for makeAlert');
    }
    Swal.fire({
        title: title,
        text: text,
        icon: type
    });
};
import { useEffect, useRef } from "react";

function Toast() {
    const toastRef = useRef(null);

    useEffect(() => {
        if (toastRef.current) {
            const toast = new bootstrap.Toast(toastRef.current);
            document.getElementById("liveToastBtn").addEventListener("click", () => toast.show());
        }
    }, []);

    return (
        <>
            <button type="button" className="btn btn-primary" id="liveToastBtn">
                Show live toast
            </button>

            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div ref={toastRef} id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <img src="..." className="rounded me-2" alt="..." />
                        <strong className="me-auto">Bootstrap</strong>
                        <small>11 mins ago</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">Hello, world! This is a toast message.</div>
                </div>
            </div>
        </>
    );
}

export default Toast;

import React, { useState, useEffect } from "react";

function LoaderUniversal({ children }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loaderTimer = setTimeout(() => {
            setLoading(false); // After 1 seconds, set loading to false
        }, 1000);

        return () => {
            clearTimeout(loaderTimer);
        };
    }, []);

    return (
        <div>
            {/* {profile?.firstName ? (
        <> */}
            {loading ? (
                <div className="col-md-12 pt-5 mt-5 text-center " >
                    <div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                children
            )}
        </div>
    );
}

export default LoaderUniversal;

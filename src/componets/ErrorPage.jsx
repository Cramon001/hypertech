import React from 'react'


const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.icon}>⚠️</div>

        <h1 style={styles.title}>SITE SUSPENDED</h1>

        <p style={styles.message}>
          This website has been temporarily suspended due to suspicious or
          malicious activity detected on the server.
        </p>

        <p style={styles.details}>
          Access to this resource has been restricted while our security systems
          investigate the issue. If you are the site owner, please contact your
          hosting provider immediately to resolve this matter.
        </p>

        <div style={styles.codeBox}>
          ERROR CODE: SEC-451 / MALICIOUS_ACTIVITY_DETECTED
        </div>

        <button style={styles.button} onClick={() => window.location.reload()}>
          Retry Connection
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #0f172a, #020617)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, sans-serif",
    color: "#fff"
  },

  card: {
    background: "#111827",
    padding: "50px",
    borderRadius: "12px",
    maxWidth: "600px",
    textAlign: "center",
    boxShadow: "0 0 40px rgba(255,0,0,0.2)",
    border: "1px solid rgba(255,0,0,0.3)"
  },

  icon: {
    fontSize: "50px",
    marginBottom: "10px"
  },

  title: {
    color: "#ef4444",
    marginBottom: "20px",
    letterSpacing: "2px"
  },

  message: {
    fontSize: "18px",
    marginBottom: "15px",
    lineHeight: "1.6"
  },

  details: {
    fontSize: "14px",
    opacity: 0.8,
    lineHeight: "1.6",
    marginBottom: "25px"
  },

  codeBox: {
    background: "#020617",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "25px",
    fontFamily: "monospace",
    color: "#f87171",
    border: "1px solid #7f1d1d"
  },

  button: {
    background: "#ef4444",
    border: "none",
    padding: "12px 25px",
    color: "white",
    fontSize: "14px",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default ErrorPage;
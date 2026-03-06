import React from "react";

const ErrorAdmin = () => {
  return (
    <div style={styles.container}>
      <div style={styles.panel}>
        <div style={styles.icon}>🔒</div>

        <h1 style={styles.title}>ADMIN ACCESS RESTRICTED</h1>

        <p style={styles.message}>
          This administrator panel is currently unavailable due to a security
          restriction.
        </p>

        <p style={styles.details}>
          Our system detected unauthorized or suspicious activity while trying
          to access the admin environment. Access has been temporarily blocked
          to protect system integrity.
        </p>

        <div style={styles.codeBox}>
          ADMIN SECURITY ALERT — CODE: ADM-403
        </div>

        <div style={styles.actions}>
        

          <button
            style={styles.secondaryButton}
            onClick={() => window.location.reload()}
          >
            Retry Login
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg,#020617,#0f172a)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    color: "white"
  },

  panel: {
    background: "#111827",
    padding: "50px",
    borderRadius: "12px",
    maxWidth: "600px",
    textAlign: "center",
    border: "1px solid rgba(255,165,0,0.3)",
    boxShadow: "0 0 40px rgba(255,165,0,0.15)"
  },

  icon: {
    fontSize: "45px",
    marginBottom: "15px"
  },

  title: {
    color: "#f59e0b",
    letterSpacing: "2px",
    marginBottom: "20px"
  },

  message: {
    fontSize: "18px",
    marginBottom: "10px",
    lineHeight: "1.6"
  },

  details: {
    fontSize: "14px",
    opacity: 0.8,
    marginBottom: "25px",
    lineHeight: "1.6"
  },

  codeBox: {
    background: "#020617",
    padding: "12px",
    borderRadius: "6px",
    marginBottom: "25px",
    fontFamily: "monospace",
    color: "#fbbf24",
    border: "1px solid #78350f"
  },

  actions: {
    display: "flex",
    gap: "15px",
    justifyContent: "center"
  },

  button: {
    background: "#f59e0b",
    border: "none",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#000"
  },

  secondaryButton: {
    background: "transparent",
    border: "1px solid #f59e0b",
    padding: "10px 20px",
    borderRadius: "6px",
    cursor: "pointer",
    color: "#f59e0b"
  }
};

export default ErrorAdmin;
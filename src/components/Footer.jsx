export default function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '1rem',
      borderTop: '1px solid #333',
      marginTop: '4rem'
    }}>
      <p>© {new Date().getFullYear()} Yogita Singh. All rights reserved.</p>
    </footer>
  );
}

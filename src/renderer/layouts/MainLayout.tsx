export default function MainLayout() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '20%', background: '#f0f0f0' }}>
        <p>Sidebar with sections</p>
      </div>
      <div style={{ width: '40%', padding: '1rem' }}>
        <p>Form editor for selected section</p>
      </div>
      <div style={{ width: '40%', background: '#e0e0e0' }}>
        <p>PDF Preview (LaTeX render)</p>
      </div>
    </div>
  );
}

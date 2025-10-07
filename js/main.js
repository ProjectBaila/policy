// Auto-fill "Last updated" with file build date (fallback: today)
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('last-updated');
  if (!el) return;
  try {
    // If served statically, use today's date
    const d = new Date();
    const fmt = d.toLocaleDateString('en-GB', { year: 'numeric', month: 'short', day: '2-digit' });
    el.textContent = fmt;
  } catch {
    el.textContent = '—';
  }
});

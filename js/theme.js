/**
 * Shared Theme Management
 * Ensures consistent dark/light mode across all pages
 */

const ThemeManager = {
    init() {
        this.initializeTheme();
        this.setupThemeToggle();
    },

    initializeTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        const html = document.documentElement;
        html.setAttribute('data-theme', savedTheme);
        this.updateThemeUI(savedTheme);
    },

    toggleTheme() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeUI(newTheme);
        
        // Dispatch custom event for charts and other components
        window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
    },

    updateThemeUI(theme) {
        const themeIcons = document.querySelectorAll('.theme-icon');
        const themeTexts = document.querySelectorAll('.theme-text');
        
        themeIcons.forEach(icon => {
            icon.textContent = theme === 'light' ? '🌞' : '🌙';
        });
        
        themeTexts.forEach(text => {
            text.textContent = theme === 'light' ? 'Light' : 'Dark';
        });
    },

    setupThemeToggle() {
        // Setup all theme toggle buttons
        document.querySelectorAll('.theme-toggle').forEach(btn => {
            btn.onclick = () => this.toggleTheme();
        });
    }
};

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => ThemeManager.init());
} else {
    ThemeManager.init();
}

// Listen for theme changes to update charts
window.addEventListener('themeChanged', (e) => {
    const isDark = e.detail.theme === 'dark';
    const gridColor = isDark ? '#404040' : '#ddd';
    const textColor = isDark ? '#fff' : '#666';
    
    // Update all Chart.js instances
    if (window.Chart && Chart.instances) {
        Chart.instances.forEach(chart => {
            if (chart.options && chart.options.scales) {
                Object.keys(chart.options.scales).forEach(scaleKey => {
                    const scale = chart.options.scales[scaleKey];
                    if (scale.grid) scale.grid.color = gridColor;
                    if (scale.ticks) scale.ticks.color = textColor;
                });
            }
            if (chart.options && chart.options.plugins && chart.options.plugins.legend) {
                if (chart.options.plugins.legend.labels) {
                    chart.options.plugins.legend.labels.color = textColor;
                }
            }
            chart.update();
        });
    }
});

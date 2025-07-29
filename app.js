// TrendLens AI Application JavaScript

class TrendLensApp {
    constructor() {
        this.data = {
            trendingTopics: [
                {"name": "AI Revolution 2025", "platform": "twitter", "volume": 15420, "sentiment": 0.8, "growth": "+13.3%", "viralPotential": 87, "location": "Worldwide", "tags": ["technology", "ai", "innovation"]},
                {"name": "Sustainable Living", "platform": "instagram", "volume": 8750, "sentiment": 0.6, "growth": "+8.7%", "viralPotential": 72, "location": "North America", "tags": ["lifestyle", "environment", "sustainability"]},
                {"name": "Crypto Market Surge", "platform": "twitter", "volume": 12300, "sentiment": 0.4, "growth": "+25.1%", "viralPotential": 91, "location": "Global", "tags": ["cryptocurrency", "bitcoin", "finance"]},
                {"name": "Remote Work Evolution", "platform": "linkedin", "volume": 6890, "sentiment": 0.7, "growth": "+5.2%", "viralPotential": 68, "location": "USA", "tags": ["work", "remote", "productivity"]},
                {"name": "Climate Action Now", "platform": "tiktok", "volume": 18750, "sentiment": 0.9, "growth": "+18.4%", "viralPotential": 94, "location": "Europe", "tags": ["climate", "activism", "environment"]},
                {"name": "Mental Health Awareness", "platform": "instagram", "volume": 11200, "sentiment": 0.8, "growth": "+7.9%", "viralPotential": 76, "location": "Global", "tags": ["health", "wellness", "awareness"]},
                {"name": "Space Exploration 2025", "platform": "twitter", "volume": 9340, "sentiment": 0.9, "growth": "+22.6%", "viralPotential": 88, "location": "Worldwide", "tags": ["space", "nasa", "exploration"]},
                {"name": "Electric Vehicle Revolution", "platform": "linkedin", "volume": 7650, "sentiment": 0.6, "growth": "+12.8%", "viralPotential": 79, "location": "Global", "tags": ["ev", "tesla", "automotive"]}
            ],
            analytics: {
                totalPosts: 1247583,
                avgEngagement: 4.7,
                topPlatforms: [
                    {"name": "Twitter", "percentage": 35, "growth": "+12%", "color": "#1DA1F2"},
                    {"name": "Instagram", "percentage": 28, "growth": "+8%", "color": "#E4405F"},
                    {"name": "TikTok", "percentage": 22, "growth": "+15%", "color": "#FF0050"},
                    {"name": "LinkedIn", "percentage": 15, "growth": "+5%", "color": "#0077B5"}
                ],
                trendingKeywords: [
                    {"keyword": "AI", "volume": 45000, "sentiment": 0.75, "platforms": ["twitter", "linkedin"]},
                    {"keyword": "Crypto", "volume": 32000, "sentiment": -0.2, "platforms": ["twitter", "instagram"]},
                    {"keyword": "Climate", "volume": 28000, "sentiment": 0.4, "platforms": ["tiktok", "instagram"]},
                    {"keyword": "Remote Work", "volume": 24000, "sentiment": 0.6, "platforms": ["linkedin", "twitter"]},
                    {"keyword": "Mental Health", "volume": 21000, "sentiment": 0.8, "platforms": ["instagram", "tiktok"]}
                ]
            },
            predictions: [
                {"trend": "Quantum Computing Breakthrough", "timeframe": "2-3 weeks", "probability": 0.78, "category": "technology", "confidence": 0.85},
                {"trend": "Sustainable Fashion Movement", "timeframe": "1-2 months", "probability": 0.82, "category": "lifestyle", "confidence": 0.79},
                {"trend": "AI Ethics Regulations", "timeframe": "3-4 weeks", "probability": 0.71, "category": "business", "confidence": 0.88},
                {"trend": "Virtual Reality Gaming", "timeframe": "2-3 weeks", "probability": 0.86, "category": "entertainment", "confidence": 0.83}
            ],
            contentExamples: [
                {
                    "platform": "twitter",
                    "content": "🚀 The AI revolution is here! From personalized healthcare to climate solutions, artificial intelligence is reshaping our world. What's your take on AI's impact in 2025? #AI #Innovation #TechRevolution #FutureIsNow",
                    "engagementScore": 87,
                    "hashtags": ["#AI", "#Innovation", "#TechRevolution", "#FutureIsNow"],
                    "bestTime": "9:00 AM - 10:00 AM"
                },
                {
                    "platform": "instagram",
                    "content": "🌱 Small changes, big impact! Switching to sustainable living doesn't have to be overwhelming. Start with these simple swaps and make a difference today! 💚✨ #SustainableLiving #EcoFriendly #GreenLifestyle #ClimateAction",
                    "engagementScore": 76,
                    "hashtags": ["#SustainableLiving", "#EcoFriendly", "#GreenLifestyle", "#ClimateAction"],
                    "bestTime": "7:00 PM - 8:00 PM"
                }
            ]
        };
        
        this.charts = {};
        this.currentSection = 'dashboard';
        this.isDarkMode = true;
        
        this.init();
    }

    init() {
        this.create3DBackground();
        this.setupNavigation();
        this.setupEventListeners();
        this.initializeDashboard();
        this.startRealTimeUpdates();
        this.setupThemeToggle();
    }

    // 3D Background Animation
    create3DBackground() {
        const particlesContainer = document.querySelector('.particles-container');
        const particleCount = 150;

        // Create particles
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random positioning and animation delay
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 15 + 's';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            
            // Random particle size and opacity
            const size = Math.random() * 3 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.opacity = Math.random() * 0.8 + 0.2;
            
            // Random colors
            const colors = ['rgba(31, 184, 205, 0.6)', 'rgba(139, 92, 246, 0.6)', 'rgba(6, 255, 165, 0.6)'];
            particle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            particlesContainer.appendChild(particle);
        }

        // Mouse interaction with particles
        document.addEventListener('mousemove', (e) => {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            particles.forEach((particle, index) => {
                const speed = (index % 5 + 1) * 0.5;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                
                particle.style.transform = `translate(${x}px, ${y}px)`;
            });
        });

        // Add floating animation to shapes
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach((shape, index) => {
            setInterval(() => {
                const rotation = Math.random() * 360;
                const scale = 0.8 + Math.random() * 0.4;
                shape.style.transform = `rotate(${rotation}deg) scale(${scale})`;
            }, 3000 + index * 500);
        });
    }

    // Navigation Setup - FIXED
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = link.getAttribute('data-section');
                this.switchSection(targetSection);
            });
        });
    }

    // FIXED: New method to properly switch sections
    switchSection(targetSection) {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('.section');
        
        // Update active nav link
        navLinks.forEach(l => l.classList.remove('active'));
        const activeLink = document.querySelector(`[data-section="${targetSection}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
        
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
        
        // Show target section
        const targetSectionElement = document.getElementById(targetSection);
        if (targetSectionElement) {
            targetSectionElement.classList.add('active');
            targetSectionElement.style.display = 'block';
        }
        
        this.currentSection = targetSection;
        this.loadSectionContent(targetSection);
        
        // Show toast notification
        this.showToast(`Switched to ${targetSection.charAt(0).toUpperCase() + targetSection.slice(1)} section`, 'info');
    }

    // Event Listeners
    setupEventListeners() {
        // Search functionality
        const trendSearch = document.getElementById('trendSearch');
        if (trendSearch) {
            trendSearch.addEventListener('input', (e) => {
                this.filterTrends(e.target.value);
            });
        }

        // Filter controls
        const platformFilter = document.getElementById('platformFilter');
        const locationFilter = document.getElementById('locationFilter');
        
        if (platformFilter) {
            platformFilter.addEventListener('change', () => this.applyFilters());
        }
        
        if (locationFilter) {
            locationFilter.addEventListener('change', () => this.applyFilters());
        }

        // Analysis form
        const analyzeBtn = document.getElementById('analyzeBtn');
        if (analyzeBtn) {
            analyzeBtn.addEventListener('click', () => this.performKeywordAnalysis());
        }

        // Content generator
        const generateBtn = document.getElementById('generateBtn');
        if (generateBtn) {
            generateBtn.addEventListener('click', () => this.generateContent());
        }
    }

    // Dashboard Initialization
    initializeDashboard() {
        this.updateDashboardStats();
        this.renderTrendingTopics();
        this.createPlatformChart();
        this.createAnalyticsCharts();
        this.renderPredictions();
    }

    // Update Dashboard Stats with Animation
    updateDashboardStats() {
        this.animateCounter('totalPosts', 0, this.data.analytics.totalPosts, 2000);
        this.animateCounter('avgEngagement', 0, this.data.analytics.avgEngagement, 1500, '%');
        this.animateCounter('trendingCount', 0, this.data.trendingTopics.length, 1000);
        this.animateCounter('accuracy', 0, 92, 1800, '%');
    }

    animateCounter(elementId, start, end, duration, suffix = '') {
        const element = document.getElementById(elementId);
        if (!element) return;

        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            
            const value = Math.floor(current);
            element.textContent = suffix === '%' ? value + suffix : value.toLocaleString() + suffix;
        }, 16);
    }

    // Render Trending Topics
    renderTrendingTopics() {
        const trendingList = document.getElementById('trendingList');
        if (!trendingList) return;

        trendingList.innerHTML = '';
        
        this.data.trendingTopics.slice(0, 6).forEach(trend => {
            const trendItem = document.createElement('div');
            trendItem.className = 'trending-item interactive';
            
            trendItem.innerHTML = `
                <div class="trend-info">
                    <h4>${trend.name}</h4>
                    <span class="trend-platform platform-${trend.platform}">${trend.platform}</span>
                </div>
                <div class="trend-metrics">
                    <div class="metric-value">${trend.volume.toLocaleString()}</div>
                    <div class="metric-label">Volume</div>
                </div>
            `;
            
            trendingList.appendChild(trendItem);
        });
    }

    // Create Platform Distribution Chart
    createPlatformChart() {
        const ctx = document.getElementById('platformChart');
        if (!ctx) return;

        const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'];
        
        if (this.charts.platform) {
            this.charts.platform.destroy();
        }
        
        this.charts.platform = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: this.data.analytics.topPlatforms.map(p => p.name),
                datasets: [{
                    data: this.data.analytics.topPlatforms.map(p => p.percentage),
                    backgroundColor: chartColors,
                    borderWidth: 2,
                    borderColor: 'rgba(167, 169, 169, 0.1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#f5f5f5',
                            padding: 20,
                            usePointStyle: true
                        }
                    }
                }
            }
        });
    }

    // Load Section Content
    loadSectionContent(section) {
        switch (section) {
            case 'dashboard':
                // Dashboard is already loaded
                break;
            case 'trends':
                this.renderTrendsSection();
                break;
            case 'analysis':
                this.setupAnalysisSection();
                break;
            case 'generator':
                this.setupGeneratorSection();
                break;
            case 'analytics':
                setTimeout(() => this.createAnalyticsCharts(), 100);
                break;
            case 'predictions':
                this.renderPredictions();
                break;
        }
    }

    // Render Trends Section
    renderTrendsSection() {
        const trendsGrid = document.getElementById('trendsGrid');
        if (!trendsGrid) return;

        trendsGrid.innerHTML = '';
        
        this.data.trendingTopics.forEach(trend => {
            const trendCard = document.createElement('div');
            trendCard.className = 'trend-card interactive';
            
            const sentimentClass = trend.sentiment > 0.5 ? 'positive' : trend.sentiment < -0.1 ? 'negative' : 'neutral';
            const sentimentWidth = Math.abs(trend.sentiment) * 100;
            
            trendCard.innerHTML = `
                <div class="trend-card-header">
                    <h3 class="trend-title">${trend.name}</h3>
                    <div class="viral-score">${trend.viralPotential}/100</div>
                </div>
                <div class="trend-platform platform-${trend.platform}">${trend.platform.toUpperCase()}</div>
                <div class="trend-metrics-grid">
                    <div class="metric-item">
                        <span class="metric-number">${trend.volume.toLocaleString()}</span>
                        <span class="metric-text">Volume</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-number">${trend.growth}</span>
                        <span class="metric-text">Growth</span>
                    </div>
                </div>
                <div class="sentiment-analysis">
                    <div class="metric-text">Sentiment Score: ${(trend.sentiment * 100).toFixed(0)}%</div>
                    <div class="sentiment-bar">
                        <div class="sentiment-fill sentiment-${sentimentClass}" style="width: ${sentimentWidth}%"></div>
                    </div>
                </div>
                <div class="trend-tags">
                    ${trend.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
            `;
            
            trendsGrid.appendChild(trendCard);
        });
    }

    // Setup Analysis Section
    setupAnalysisSection() {
        // Section is already set up in HTML, just ensure it's ready
        const analysisResults = document.getElementById('analysisResults');
        if (analysisResults && analysisResults.innerHTML === '') {
            analysisResults.innerHTML = '<div class="analysis-placeholder">Enter keywords above to start analysis</div>';
        }
    }

    // Setup Generator Section
    setupGeneratorSection() {
        // Section is already set up in HTML, just ensure it's ready
        const generatorResults = document.getElementById('generatorResults');
        if (generatorResults && generatorResults.innerHTML === '') {
            generatorResults.innerHTML = '<div class="generator-placeholder">Select options above and click Generate Content</div>';
        }
    }

    // Apply Filters
    applyFilters() {
        const platform = document.getElementById('platformFilter')?.value || 'all';
        const location = document.getElementById('locationFilter')?.value || 'all';
        
        let filteredTrends = this.data.trendingTopics;
        
        if (platform !== 'all') {
            filteredTrends = filteredTrends.filter(trend => trend.platform === platform);
        }
        
        if (location !== 'all') {
            filteredTrends = filteredTrends.filter(trend => 
                trend.location.toLowerCase().includes(location.toLowerCase())
            );
        }
        
        this.renderFilteredTrends(filteredTrends);
        this.showToast(`Applied filters: ${platform !== 'all' ? platform : 'all platforms'}, ${location !== 'all' ? location : 'all locations'}`, 'info');
    }

    renderFilteredTrends(trends) {
        const trendsGrid = document.getElementById('trendsGrid');
        if (!trendsGrid) return;

        trendsGrid.innerHTML = '';
        
        if (trends.length === 0) {
            trendsGrid.innerHTML = '<div class="no-results">No trends match your filters</div>';
            return;
        }
        
        trends.forEach(trend => {
            const trendCard = document.createElement('div');
            trendCard.className = 'trend-card interactive';
            
            const sentimentClass = trend.sentiment > 0.5 ? 'positive' : trend.sentiment < -0.1 ? 'negative' : 'neutral';
            const sentimentWidth = Math.abs(trend.sentiment) * 100;
            
            trendCard.innerHTML = `
                <div class="trend-card-header">
                    <h3 class="trend-title">${trend.name}</h3>
                    <div class="viral-score">${trend.viralPotential}/100</div>
                </div>
                <div class="trend-platform platform-${trend.platform}">${trend.platform.toUpperCase()}</div>
                <div class="trend-metrics-grid">
                    <div class="metric-item">
                        <span class="metric-number">${trend.volume.toLocaleString()}</span>
                        <span class="metric-text">Volume</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-number">${trend.growth}</span>
                        <span class="metric-text">Growth</span>
                    </div>
                </div>
                <div class="sentiment-analysis">
                    <div class="metric-text">Sentiment Score: ${(trend.sentiment * 100).toFixed(0)}%</div>
                    <div class="sentiment-bar">
                        <div class="sentiment-fill sentiment-${sentimentClass}" style="width: ${sentimentWidth}%"></div>
                    </div>
                </div>
            `;
            
            trendsGrid.appendChild(trendCard);
        });
    }

    // Filter Trends by Search
    filterTrends(searchTerm) {
        if (!searchTerm) {
            this.renderTrendsSection();
            return;
        }
        
        const filteredTrends = this.data.trendingTopics.filter(trend =>
            trend.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            trend.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        
        this.renderFilteredTrends(filteredTrends);
        this.showToast(`Found ${filteredTrends.length} trends matching "${searchTerm}"`, 'info');
    }

    // Keyword Analysis
    performKeywordAnalysis() {
        const keywordInput = document.getElementById('keywordInput');
        const timeframe = document.getElementById('timeframeSelect');
        const resultsContainer = document.getElementById('analysisResults');
        
        if (!keywordInput || !resultsContainer) return;
        
        const keywords = keywordInput.value.split(',').map(k => k.trim()).filter(k => k);
        if (keywords.length === 0) {
            this.showToast('Please enter at least one keyword', 'error');
            return;
        }
        
        this.showLoading();
        
        setTimeout(() => {
            this.hideLoading();
            this.displayAnalysisResults(keywords, timeframe?.value || '24h');
            this.showToast('Analysis completed successfully!', 'success');
        }, 2000);
    }

    displayAnalysisResults(keywords, timeframe) {
        const resultsContainer = document.getElementById('analysisResults');
        if (!resultsContainer) return;

        resultsContainer.innerHTML = '';
        
        keywords.forEach(keyword => {
            const volume = Math.floor(Math.random() * 50000) + 10000;
            const sentiment = (Math.random() * 2) - 1;
            const growth = Math.floor(Math.random() * 40) - 10;
            
            const analysisCard = document.createElement('div');
            analysisCard.className = 'analysis-card';
            
            analysisCard.innerHTML = `
                <h4>${keyword}</h4>
                <div class="analysis-metrics">
                    <div class="metric-item">
                        <span class="metric-number">${volume.toLocaleString()}</span>
                        <span class="metric-text">Total Volume</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-number">${sentiment.toFixed(2)}</span>
                        <span class="metric-text">Sentiment Score</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-number">${growth > 0 ? '+' : ''}${growth}%</span>
                        <span class="metric-text">Growth Rate</span>
                    </div>
                    <div class="metric-item">
                        <span class="metric-number">${timeframe}</span>
                        <span class="metric-text">Timeframe</span>
                    </div>
                </div>
                <div class="keyword-insights">
                    <p><strong>Key Insights:</strong></p>
                    <ul>
                        <li>Peak activity detected during ${this.getRandomTime()}</li>
                        <li>Strongest engagement on ${this.getRandomPlatform()}</li>
                        <li>Trending in ${this.getRandomLocation()} region</li>
                    </ul>
                </div>
            `;
            
            resultsContainer.appendChild(analysisCard);
        });
    }

    getRandomTime() {
        const times = ['morning hours (8-10 AM)', 'afternoon peak (2-4 PM)', 'evening rush (6-8 PM)', 'late night (10 PM-12 AM)'];
        return times[Math.floor(Math.random() * times.length)];
    }

    getRandomPlatform() {
        const platforms = ['Twitter', 'Instagram', 'TikTok', 'LinkedIn'];
        return platforms[Math.floor(Math.random() * platforms.length)];
    }

    getRandomLocation() {
        const locations = ['North America', 'Europe', 'Asia-Pacific', 'Global'];
        return locations[Math.floor(Math.random() * locations.length)];
    }

    // Content Generation
    generateContent() {
        const platform = document.getElementById('generatorPlatform')?.value;
        const tone = document.getElementById('generatorTone')?.value;
        const length = document.getElementById('generatorLength')?.value;
        const topic = document.getElementById('generatorTopic')?.value;
        const resultsContainer = document.getElementById('generatorResults');
        
        if (!topic || !resultsContainer) {
            this.showToast('Please enter a topic for content generation', 'error');
            return;
        }
        
        this.showLoading();
        
        setTimeout(() => {
            this.hideLoading();
            const generatedContent = this.createGeneratedContent(platform, tone, length, topic);
            this.displayGeneratedContent(generatedContent, resultsContainer);
            this.showToast('Content generated successfully!', 'success');
        }, 3000);
    }

    createGeneratedContent(platform, tone, length, topic) {
        const contentTemplates = {
            twitter: [
                `🚀 ${topic} is revolutionizing the way we think! The future is here and it's incredible. What are your thoughts? #${topic.replace(/\s+/g, '')} #Innovation #Future`,
                `💡 Just discovered something amazing about ${topic}! This could change everything. Thread below 👇 #${topic.replace(/\s+/g, '')} #GameChanger`,
                `🔥 Hot take: ${topic} is the next big thing. Here's why everyone should pay attention... #${topic.replace(/\s+/g, '')} #TrendAlert`
            ],
            instagram: [
                `✨ ${topic} has been on my mind lately! Swipe to see why this matters so much. What do you think? Drop your thoughts below! 💭 #${topic.replace(/\s+/g, '')} #Inspiration #Community`,
                `🌟 Sharing my thoughts on ${topic} because it's been such a game-changer! Save this post if you want to learn more. #${topic.replace(/\s+/g, '')} #Growth #Mindset`,
                `💫 Let's talk about ${topic}! This topic has so much potential and I'm excited to share why. Tag someone who needs to see this! #${topic.replace(/\s+/g, '')} #Awareness`
            ],
            linkedin: [
                `I've been analyzing the impact of ${topic} on our industry, and the insights are fascinating. Here are three key takeaways that every professional should consider. #${topic.replace(/\s+/g, '')} #Leadership #Innovation`,
                `${topic} represents a significant shift in how we approach modern challenges. As leaders, we must adapt and embrace these changes. What's your perspective? #${topic.replace(/\s+/g, '')} #Strategy #Future`,
                `The conversation around ${topic} continues to evolve. Based on recent data and trends, here's what I believe we should focus on moving forward. #${topic.replace(/\s+/g, '')} #Insights #Growth`
            ],
            tiktok: [
                `POV: You just learned about ${topic} and your mind is blown 🤯 Let me explain why this matters! #${topic.replace(/\s+/g, '')} #MindBlown #Learn #Viral`,
                `Tell me you don't know about ${topic} without telling me... Here's everything you need to know! #${topic.replace(/\s+/g, '')} #Educational #Trending #Facts`,
                `${topic} really said "let me change the game" 💅 Here's the tea ☕ #${topic.replace(/\s+/g, '')} #Trendy #GameChanger #Viral`
            ]
        };
        
        const templates = contentTemplates[platform] || contentTemplates.twitter;
        const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
        
        return {
            content: randomTemplate,
            platform: platform,
            engagementScore: Math.floor(Math.random() * 30) + 70,
            hashtags: [`#${topic.replace(/\s+/g, '')}`, '#Innovation', '#Trending', '#Future'],
            bestTime: this.getOptimalPostingTime(platform),
            viralPotential: Math.floor(Math.random() * 40) + 60
        };
    }

    getOptimalPostingTime(platform) {
        const times = {
            twitter: '9:00 AM - 10:00 AM',
            instagram: '7:00 PM - 8:00 PM',
            linkedin: '8:00 AM - 9:00 AM',
            tiktok: '6:00 PM - 10:00 PM'
        };
        return times[platform] || '9:00 AM - 10:00 AM';
    }

    displayGeneratedContent(content, container) {
        container.innerHTML = `
            <div class="generated-content">
                <h3>Generated Content for ${content.platform.toUpperCase()}</h3>
                <div class="content-preview">
                    "${content.content}"
                </div>
                <div class="content-metrics">
                    <div class="content-metric">
                        <div class="metric-score">${content.engagementScore}%</div>
                        <div class="metric-text">Engagement Score</div>
                    </div>
                    <div class="content-metric">
                        <div class="metric-score">${content.viralPotential}%</div>
                        <div class="metric-text">Viral Potential</div>
                    </div>
                    <div class="content-metric">
                        <div class="metric-score">${content.bestTime}</div>
                        <div class="metric-text">Best Time to Post</div>
                    </div>
                </div>
                <div class="hashtag-suggestions">
                    <h4>Suggested Hashtags:</h4>
                    <div class="hashtags">
                        ${content.hashtags.map(tag => `<span class="hashtag">${tag}</span>`).join('')}
                    </div>
                </div>
                <button class="btn btn--primary" onclick="app.copyToClipboard('${content.content.replace(/'/g, "\\'")}')">Copy Content</button>
            </div>
        `;
    }

    // Analytics Charts
    createAnalyticsCharts() {
        this.createKeywordsList();
        this.createPerformanceChart();
        this.createSentimentChart();
        this.createGrowthChart();
    }

    createKeywordsList() {
        const keywordsList = document.getElementById('keywordsList');
        if (!keywordsList) return;

        keywordsList.innerHTML = '';
        
        this.data.analytics.trendingKeywords.forEach(keyword => {
            const keywordItem = document.createElement('div');
            keywordItem.className = 'keyword-item';
            
            keywordItem.innerHTML = `
                <div class="keyword-name">${keyword.keyword}</div>
                <div class="keyword-volume">${keyword.volume.toLocaleString()}</div>
            `;
            
            keywordsList.appendChild(keywordItem);
        });
    }

    createPerformanceChart() {
        const ctx = document.getElementById('performanceChart');
        if (!ctx) return;

        const chartColors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5'];
        
        if (this.charts.performance) {
            this.charts.performance.destroy();
        }
        
        this.charts.performance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: this.data.analytics.topPlatforms.map(p => p.name),
                datasets: [{
                    label: 'Platform Performance',
                    data: this.data.analytics.topPlatforms.map(p => p.percentage),
                    backgroundColor: chartColors,
                    borderWidth: 1,
                    borderColor: 'rgba(167, 169, 169, 0.2)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#f5f5f5'
                        },
                        grid: {
                            color: 'rgba(167, 169, 169, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#f5f5f5'
                        },
                        grid: {
                            color: 'rgba(167, 169, 169, 0.1)'
                        }
                    }
                }
            }
        });
    }

    createSentimentChart() {
        const ctx = document.getElementById('sentimentChart');
        if (!ctx) return;

        if (this.charts.sentiment) {
            this.charts.sentiment.destroy();
        }

        this.charts.sentiment = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: this.data.analytics.trendingKeywords.map(k => k.keyword),
                datasets: [{
                    label: 'Sentiment Analysis',
                    data: this.data.analytics.trendingKeywords.map(k => (k.sentiment + 1) * 50),
                    backgroundColor: 'rgba(31, 184, 205, 0.2)',
                    borderColor: '#1FB8CD',
                    borderWidth: 2,
                    pointBackgroundColor: '#1FB8CD'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#f5f5f5'
                        }
                    }
                },
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(167, 169, 169, 0.2)'
                        },
                        grid: {
                            color: 'rgba(167, 169, 169, 0.2)'
                        },
                        pointLabels: {
                            color: '#f5f5f5'
                        },
                        ticks: {
                            color: '#f5f5f5',
                            backdropColor: 'transparent'
                        }
                    }
                }
            }
        });
    }

    createGrowthChart() {
        const ctx = document.getElementById('growthChart');
        if (!ctx) return;

        // Generate mock time series data
        const labels = ['6h ago', '5h ago', '4h ago', '3h ago', '2h ago', '1h ago', 'Now'];
        const data = [65, 72, 68, 85, 78, 90, 95];

        if (this.charts.growth) {
            this.charts.growth.destroy();
        }

        this.charts.growth = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Growth Trend',
                    data: data,
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#1FB8CD',
                    pointBorderColor: '#1FB8CD',
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#f5f5f5'
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            color: '#f5f5f5'
                        },
                        grid: {
                            color: 'rgba(167, 169, 169, 0.1)'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#f5f5f5'
                        },
                        grid: {
                            color: 'rgba(167, 169, 169, 0.1)'
                        }
                    }
                }
            }
        });
    }

    // Predictions
    renderPredictions() {
        const predictionsGrid = document.getElementById('predictionsGrid');
        const timeline = document.getElementById('timeline');
        
        if (predictionsGrid) {
            predictionsGrid.innerHTML = '';
            
            this.data.predictions.forEach(prediction => {
                const predictionCard = document.createElement('div');
                predictionCard.className = 'prediction-card interactive';
                
                predictionCard.innerHTML = `
                    <div class="prediction-header">
                        <h3 class="prediction-title">${prediction.trend}</h3>
                        <span class="prediction-category">${prediction.category}</span>
                    </div>
                    <div class="prediction-timeframe">
                        <strong>Expected: ${prediction.timeframe}</strong>
                    </div>
                    <div class="probability-meter">
                        <div class="probability-label">
                            <span>Probability</span>
                            <span>${Math.round(prediction.probability * 100)}%</span>
                        </div>
                        <div class="probability-bar">
                            <div class="probability-fill" style="width: ${prediction.probability * 100}%"></div>
                        </div>
                    </div>
                    <div class="confidence-score">
                        <span>Confidence: ${Math.round(prediction.confidence * 100)}%</span>
                    </div>
                `;
                
                predictionsGrid.appendChild(predictionCard);
            });
        }
        
        if (timeline) {
            timeline.innerHTML = '';
            
            this.data.predictions.forEach((prediction, index) => {
                const timelineItem = document.createElement('div');
                timelineItem.className = 'timeline-item';
                
                timelineItem.innerHTML = `
                    <div class="timeline-content">
                        <div class="timeline-date">${prediction.timeframe}</div>
                        <h4 class="timeline-title">${prediction.trend}</h4>
                        <p>Probability: ${Math.round(prediction.probability * 100)}% | Confidence: ${Math.round(prediction.confidence * 100)}%</p>
                    </div>
                `;
                
                timeline.appendChild(timelineItem);
            });
        }
    }

    // Real-time Updates
    startRealTimeUpdates() {
        setInterval(() => {
            this.updateTrendingData();
            if (this.currentSection === 'dashboard') {
                this.updateDashboardStats();
            }
        }, 30000); // Update every 30 seconds
    }

    updateTrendingData() {
        // Simulate real-time data updates
        this.data.trendingTopics.forEach(trend => {
            const change = (Math.random() - 0.5) * 1000;
            trend.volume = Math.max(1000, trend.volume + Math.floor(change));
            
            const sentimentChange = (Math.random() - 0.5) * 0.1;
            trend.sentiment = Math.max(-1, Math.min(1, trend.sentiment + sentimentChange));
            
            const growthChange = (Math.random() - 0.5) * 5;
            const currentGrowth = parseFloat(trend.growth.replace('%', '').replace('+', ''));
            trend.growth = `${currentGrowth + growthChange > 0 ? '+' : ''}${(currentGrowth + growthChange).toFixed(1)}%`;
        });
        
        if (this.currentSection === 'dashboard') {
            this.renderTrendingTopics();
        }
    }

    // Theme Toggle - FIXED
    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = themeToggle?.querySelector('.theme-icon');
        
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.isDarkMode = !this.isDarkMode;
                
                // Apply theme to document
                if (this.isDarkMode) {
                    document.documentElement.setAttribute('data-color-scheme', 'dark');
                    document.body.setAttribute('data-color-scheme', 'dark');
                } else {
                    document.documentElement.setAttribute('data-color-scheme', 'light');
                    document.body.setAttribute('data-color-scheme', 'light');
                }
                
                if (themeIcon) {
                    themeIcon.textContent = this.isDarkMode ? '🌙' : '☀️';
                }
                
                // Recreate charts with new theme
                setTimeout(() => {
                    if (this.currentSection === 'dashboard') {
                        this.createPlatformChart();
                    } else if (this.currentSection === 'analytics') {
                        this.createAnalyticsCharts();
                    }
                }, 100);
                
                this.showToast(`Switched to ${this.isDarkMode ? 'dark' : 'light'} mode`, 'success');
            });
        }
    }

    // Utility Functions
    showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <span>${message}</span>
                <button class="toast-close" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
        `;

        toastContainer.appendChild(toast);

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 5000);
    }

    showLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('active');
        }
    }

    hideLoading() {
        const loadingOverlay = document.getElementById('loadingOverlay');
        if (loadingOverlay) {
            loadingOverlay.classList.remove('active');
        }
    }

    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Content copied to clipboard!', 'success');
        }).catch(() => {
            this.showToast('Failed to copy content', 'error');
        });
    }
}

// Initialize the application
let app;
document.addEventListener('DOMContentLoaded', () => {
    app = new TrendLensApp();
});

// Additional interactive effects
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    shapes.forEach((shape, index) => {
        const speed = (index % 3 + 1) * 0.3;
        const x = (mouseX - 0.5) * speed * 20;
        const y = (mouseY - 0.5) * speed * 20;
        
        const currentTransform = shape.style.transform || '';
        const baseTransform = currentTransform.replace(/translate\([^)]*\)/g, '').trim();
        shape.style.transform = `${baseTransform} translate(${x}px, ${y}px)`.trim();
    });
});

// Add CSS for additional styles not in main CSS
const additionalStyles = `
    .hashtag {
        display: inline-block;
        background: rgba(31, 184, 205, 0.2);
        color: #1FB8CD;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 12px;
        margin: 2px;
    }
    
    .tag {
        display: inline-block;
        background: rgba(139, 92, 246, 0.2);
        color: #8B5CF6;
        padding: 2px 6px;
        border-radius: 8px;
        font-size: 10px;
        margin: 2px;
    }
    
    .toast-close {
        background: none;
        border: none;
        color: inherit;
        font-size: 18px;
        cursor: pointer;
        margin-left: 10px;
    }
    
    .toast-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    .analysis-placeholder,
    .generator-placeholder {
        text-align: center;
        color: var(--color-text-secondary);
        padding: 40px 20px;
        font-style: italic;
    }
    
    .no-results {
        text-align: center;
        color: var(--color-text-secondary);
        padding: 40px 20px;
        font-size: 18px;
    }
    
    .keyword-insights {
        margin-top: 16px;
        padding: 16px;
        background: rgba(167, 169, 169, 0.05);
        border-radius: 8px;
    }
    
    .keyword-insights ul {
        margin: 8px 0 0 0;
        padding-left: 20px;
    }
    
    .keyword-insights li {
        margin-bottom: 4px;
        color: var(--color-text-secondary);
    }
    
    .analysis-metrics {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 16px;
        margin: 16px 0;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);
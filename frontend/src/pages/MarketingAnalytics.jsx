import { useState } from 'react';
import { motion } from 'framer-motion';

const MarketingAnalytics = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: 'Q1 Digital Marketing Push',
      channel: 'Social Media',
      status: 'Active',
      budget: 50000,
      spent: 32000,
      impressions: 1250000,
      clicks: 45000,
      conversions: 1250,
      roi: 340
    },
    {
      id: 2,
      name: 'SEO Optimization Campaign',
      channel: 'Search',
      status: 'Planning',
      budget: 75000,
      spent: 0,
      impressions: 0,
      clicks: 0,
      conversions: 0,
      roi: 0
    },
    {
      id: 3,
      name: 'Email Newsletter Series',
      channel: 'Email',
      status: 'Completed',
      budget: 15000,
      spent: 15000,
      impressions: 85000,
      clicks: 12000,
      conversions: 340,
      roi: 280
    }
  ]);

  const [socialMetrics, setSocialMetrics] = useState({
    followers: { instagram: 12500, linkedin: 8900, twitter: 5600, facebook: 15400 },
    engagement: { instagram: 4.2, linkedin: 3.8, twitter: 2.1, facebook: 3.5 },
    growth: { instagram: 12, linkedin: 8, twitter: 5, facebook: 15 }
  });

  return (
    <div className="pt-24 pb-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Marketing & Analytics</h1>
        <p className="text-slate-400">Campaign performance, social media analytics, and marketing insights</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {[
          { id: 'overview', label: 'Overview', icon: 'dashboard' },
          { id: 'campaigns', label: 'Campaigns', icon: 'campaign' },
          { id: 'social', label: 'Social Media', icon: 'share' },
          { id: 'seo', label: 'SEO Analytics', icon: 'search' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Campaigns" value={campaigns.length} icon="campaign" color="blue" />
        <StatCard title="Active Campaigns" value={campaigns.filter(c => c.status === 'Active').length} icon="play_circle" color="green" />
        <StatCard title="Avg ROI" value="220%" icon="trending_up" color="yellow" />
        <StatCard title="Total Impressions" value="1.4M" icon="visibility" color="purple" />
      </div>

      {/* Main Content */}
      {activeTab === 'overview' && (
        <MarketingOverview campaigns={campaigns} socialMetrics={socialMetrics} />
      )}

      {activeTab === 'campaigns' && (
        <CampaignManagement campaigns={campaigns} setCampaigns={setCampaigns} />
      )}

      {activeTab === 'social' && (
        <SocialMediaAnalytics metrics={socialMetrics} />
      )}

      {activeTab === 'seo' && (
        <SEOAnalytics />
      )}
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-slate-400 text-sm">{title}</p>
        <p className={`text-3xl font-bold mt-2 text-${color}-400`}>{value}</p>
      </div>
      <div className={`p-3 rounded-xl bg-${color}-500/20`}>
        <span className={`material-symbols-outlined text-${color}-400 text-2xl`}>{icon}</span>
      </div>
    </div>
  </motion.div>
);

const MarketingOverview = ({ campaigns, socialMetrics }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
  >
    {/* Campaign Performance */}
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-bold text-white mb-6">Campaign Performance</h2>

      <div className="space-y-4">
        {campaigns.slice(0, 3).map(campaign => (
          <motion.div
            key={campaign.id}
            whileHover={{ x: 5 }}
            className="p-4 bg-white/5 rounded-xl"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-white font-medium">{campaign.name}</h3>
              <span className={`px-2 py-1 rounded-full text-xs ${campaign.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                  campaign.status === 'Planning' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                }`}>
                {campaign.status}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-slate-400">ROI</p>
                <p className="text-white font-medium">{campaign.roi}%</p>
              </div>
              <div>
                <p className="text-slate-400">Clicks</p>
                <p className="text-white font-medium">{campaign.clicks.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-slate-400">Conversions</p>
                <p className="text-white font-medium">{campaign.conversions}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Social Media Summary */}
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h2 className="text-xl font-bold text-white mb-6">Social Media Summary</h2>

      <div className="space-y-4">
        {Object.entries(socialMetrics.followers).map(([platform, followers]) => (
          <div key={platform} className="p-3 bg-white/5 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${platform === 'instagram' ? 'bg-pink-500' :
                    platform === 'linkedin' ? 'bg-blue-500' :
                      platform === 'twitter' ? 'bg-sky-400' :
                        'bg-blue-600'
                  }`}></div>
                <span className="text-white capitalize">{platform}</span>
              </div>
              <span className="text-white font-medium">{followers.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-xs text-slate-400">
              <span>Engagement: {socialMetrics.engagement[platform]}%</span>
              <span>Growth: +{socialMetrics.growth[platform]}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const CampaignManagement = ({ campaigns, setCampaigns }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Campaign Management</h2>
      <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2">
        <span className="material-symbols-outlined">add</span>
        New Campaign
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {campaigns.map(campaign => (
        <motion.div
          key={campaign.id}
          whileHover={{ y: -5 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">{campaign.name}</h3>
              <p className="text-slate-300 text-sm">{campaign.channel} Channel</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${campaign.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                campaign.status === 'Planning' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-purple-500/20 text-purple-400'
              }`}>
              {campaign.status}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-slate-400 text-sm">Budget</p>
              <p className="text-white font-medium">₹{campaign.budget.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Spent</p>
              <p className="text-white font-medium">₹{campaign.spent.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">ROI</p>
              <p className="text-white font-medium">{campaign.roi}%</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Conversions</p>
              <p className="text-white font-medium">{campaign.conversions}</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-slate-300">Budget Utilization</span>
              <span className="text-white">{Math.round((campaign.spent / campaign.budget) * 100)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full"
                style={{ width: `${(campaign.spent / campaign.budget) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-lg text-sm">
              View Details
            </button>
            <button className="flex-1 bg-green-500/20 hover:bg-green-500/30 text-green-400 py-2 rounded-lg text-sm">
              Optimize
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SocialMediaAnalytics = ({ metrics }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <h2 className="text-2xl font-bold text-white">Social Media Analytics</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Object.entries(metrics.followers).map(([platform, followers], index) => (
        <motion.div
          key={platform}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${platform === 'instagram' ? 'bg-pink-500/20' :
                platform === 'linkedin' ? 'bg-blue-500/20' :
                  platform === 'twitter' ? 'bg-sky-400/20' :
                    'bg-blue-600/20'
              }`}>
              <span className={`material-symbols-outlined text-2xl ${platform === 'instagram' ? 'text-pink-400' :
                  platform === 'linkedin' ? 'text-blue-400' :
                    platform === 'twitter' ? 'text-sky-400' :
                      'text-blue-600'
                }`}>
                {platform}
              </span>
            </div>
            <div>
              <h3 className="text-white font-bold capitalize">{platform}</h3>
              <p className="text-slate-400 text-sm">Social Platform</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-slate-400 text-sm">Followers</p>
              <p className="text-2xl font-bold text-white">{followers.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Engagement Rate</p>
              <p className="text-xl font-bold text-white">{metrics.engagement[platform]}%</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm">Growth (30d)</p>
              <p className="text-xl font-bold text-green-400">+{metrics.growth[platform]}%</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    {/* Engagement Chart Placeholder */}
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-6">Engagement Trends</h3>
      <div className="bg-blue-50/50 rounded-xl p-8 h-64 flex items-center justify-center border border-blue-100">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-white text-2xl">bar_chart</span>
          </div>
          <p className="text-slate-300">Interactive engagement charts and analytics</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const SEOAnalytics = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <h2 className="text-2xl font-bold text-white">SEO Performance</h2>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-bold text-white mb-4">Organic Traffic</h3>
        <div className="text-3xl font-bold text-green-400 mb-2">45.2K</div>
        <p className="text-slate-300 text-sm">+18.5% vs last month</p>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-bold text-white mb-4">Keyword Rankings</h3>
        <div className="text-3xl font-bold text-blue-400 mb-2">127</div>
        <p className="text-slate-300 text-sm">Top 10 positions</p>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-bold text-white mb-4">Backlinks</h3>
        <div className="text-3xl font-bold text-purple-400 mb-2">2.1K</div>
        <p className="text-slate-300 text-sm">+42 new this month</p>
      </div>
    </div>

    {/* Top Performing Keywords */}
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-6">Top Performing Keywords</h3>

      <div className="space-y-3">
        {[
          { keyword: 'digital marketing services', position: 3, volume: 12500, trend: '+2' },
          { keyword: 'software development company', position: 7, volume: 8900, trend: '+1' },
          { keyword: 'ai automation solutions', position: 12, volume: 5600, trend: '-3' },
          { keyword: 'web development agency', position: 5, volume: 15400, trend: '0' }
        ].map((kw, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
          >
            <div>
              <p className="text-white font-medium">{kw.keyword}</p>
              <p className="text-slate-400 text-sm">{kw.volume.toLocaleString()} monthly searches</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-white">#{kw.position}</span>
              <span className={`px-2 py-1 rounded text-xs font-medium ${kw.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' :
                  kw.trend.startsWith('-') ? 'bg-red-500/20 text-red-400' :
                    'bg-gray-500/20 text-gray-400'
                }`}>
                {kw.trend}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default MarketingAnalytics;
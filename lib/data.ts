import { 
  Layers, 
  Cpu, 
  Shield, 
  Code2,
  Search,
  Activity,
  Terminal,
  Eye,
  GitBranch,
  Lock
} from 'lucide-react';

export const stats = [
  { value: '10+', label: 'Framework Signatures' },
  { value: 'Offline', label: 'First Scanning' },
  { value: '~9MB', label: 'Binary Size' },
  { value: 'MIT', label: 'Open Source' },
];

export const features = [
  {
    icon: Layers,
    title: 'App Fingerprinting',
    description: 'Surfaces the frameworks, engines, and native signals hiding inside installed apps. Quick read on what an app is made of, without the lab report feel.',
    color: 'steel' as const,
  },
  {
    icon: Code2,
    title: 'Dev-Friendly Insight',
    description: 'Gives you a quick read on what an app is made of, without making it feel like a lab report. Clean, technical details that just make sense.',
    color: 'cyan' as const,
  },
  {
    icon: Activity,
    title: 'Task Manager',
    description: 'Real-time view of active processes and memory usage. See what apps are actually doing when you\'re not looking.',
    color: 'green' as const,
  },
  {
    icon: Search,
    title: 'Storage & Usage',
    description: 'Detailed analysis of app size, cache, and daily screen time. Know exactly how much space and attention each app gets.',
    color: 'amber' as const,
  },
  {
    icon: Terminal,
    title: 'System Info',
    description: 'Overview of device sensor data, battery health, and hardware specs. Your phone\'s complete technical profile in one place.',
    color: 'steel' as const,
  },
  {
    icon: Eye,
    title: 'DeepLink Tester',
    description: 'NEW: Test and debug deep links with ease. Verify URL schemes, test custom protocols, and ensure your app links work perfectly every time.',
    color: 'cyan' as const,
  },
];

export const screenshots = [
  {
    num: '01',
    title: 'Home',
    caption: 'Your apps, decoded. A clean dashboard showing every installed app with its detected framework badges.',
    dark: '/images/home-black.jpg',
    light: '/images/home-white.jpg',
  },
  {
    num: '02',
    title: 'App Details',
    caption: 'Deep dive into any app. Framework detection, native signals, build artifacts, and dependency mapping all in one view.',
    dark: '/images/app-details-black.jpg',
    light: '/images/app-details-white.jpg',
  },
  {
    num: '03',
    title: 'Task Manager',
    caption: 'Real-time process monitoring. Memory usage, CPU impact, and background activity tracking with visual performance metrics.',
    dark: '/images/task-manager-black.jpg',
    light: '/images/task-manager-white.jpg',
  },
  {
    num: '04',
    title: 'Storage Insights',
    caption: 'Deep storage analytics—app size breakdown, cache usage, data footprint.',
    dark: '/images/storage-insights-black.jpg',
    light: '/images/storage-insights-white.jpg',
  },
  {
    num: '05',
    title: 'DeepLink Tester',
    caption: 'NEW: Test and debug deep links with ease. Verify URL schemes, test custom protocols, and ensure your app links work perfectly.',
    dark: '/images/deep-link-black.jpg',
    light: '/images/deep-link-white.jpg',
  },
  {
    num: '06',
    title: 'Menu',
    caption: 'Quick navigation to filtering, search, and system overview modes.',
    dark: '/images/menu-black.jpg',
    light: '/images/menu-white.jpg',
  },
  {
    num: '07',
    title: 'Search',
    caption: 'Find any app instantly with intelligent search across package names and display names.',
    dark: '/images/search-black.jpg',
    light: '/images/search-white.jpg',
  },
  {
    num: '08',
    title: 'Stack Filters',
    caption: 'Filter apps by framework—see only Flutter apps, or React Native, or pure native Android.',
    dark: '/images/filter-stack-bottomsheet-black.jpg',
    light: '/images/filter-stack-bottomsheet-white.jpg',
  },
  {
    num: '09',
    title: 'Usage Statistics',
    caption: 'System-level usage data showing when and how often apps are accessed.',
    dark: '/images/usage-statistics-black.jpg',
    light: '/images/usage-statistics-white.jpg',
  },
];

export const technicalPoints = [
  { 
    icon: Search, 
    title: 'Package Metadata + Native Library Fingerprinting', 
    desc: 'Analyzes APK structure, manifest data, and native library signatures to identify frameworks without executing code.' 
  },
  { 
    icon: Activity, 
    title: 'Task Manager, Memory Visibility, Storage Analytics', 
    desc: 'Integrates with Android system APIs to surface real-time process data and storage breakdowns.' 
  },
  { 
    icon: Terminal, 
    title: 'Feature-First Flutter Codebase', 
    desc: 'Clean architecture with data/domain/presentation splits. Modular, testable, and contributor-friendly.' 
  },
  { 
    icon: Eye, 
    title: 'Dual Interface System', 
    desc: 'Complete dark and light mode implementation with consistent motion language throughout.' 
  },
];

export const trustCards = [
  {
    icon: GitBranch,
    title: 'Private by Design',
    description: 'Everything runs locally on your device. No cloud processing, no telemetry, no data collection. Your phone stays your phone.',
    stat: '100%',
    statLabel: 'Local',
    color: 'steel',
  },
  {
    icon: Activity,
    title: 'Fun to Explore',
    description: 'A polished UI that makes poking around feel lightweight instead of dry. Discover app internals without the technical overwhelm.',
    stat: 'Light',
    statLabel: 'Weight',
    color: 'green',
  },
];

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
    title: 'Stack Detection',
    description: 'Framework fingerprinting across Flutter, React Native, native Android, Unity, Kotlin Multiplatform, and more. Surface-level app icons hide deep technical architecture—Unfilter reveals it all.',
    color: 'steel' as const,
  },
  {
    icon: Cpu,
    title: 'System Insights',
    description: 'Active processes, memory behavior, storage pressure, and usage patterns. Understand not just what apps are built with, but how they behave in your system.',
    color: 'cyan' as const,
  },
  {
    icon: Shield,
    title: 'Privacy by Design',
    description: 'Local-only analysis. No analytics SDKs, no tracking, no upload pipeline. Your app data never leaves your device—full stop.',
    color: 'amber' as const,
  },
  {
    icon: Code2,
    title: 'Developer-Readable',
    description: 'Real technical signal instead of vague marketing labels. Package names, native libraries, build fingerprints—information that actually means something.',
    color: 'green' as const,
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
    title: 'Menu',
    caption: 'Quick navigation to filtering, search, and system overview modes.',
    dark: '/images/menu-black.jpg',
    light: '/images/menu-white.jpg',
  },
  {
    num: '03',
    title: 'Search',
    caption: 'Find any app instantly with intelligent search across package names and display names.',
    dark: '/images/search-black.jpg',
    light: '/images/search-white.jpg',
  },
  {
    num: '04',
    title: 'Stack Filters',
    caption: 'Filter apps by framework—see only Flutter apps, or React Native, or pure native Android.',
    dark: '/images/filter-stack-bottomsheet-black.jpg',
    light: '/images/filter-stack-bottomsheet-white.jpg',
  },
  {
    num: '05',
    title: 'Task Manager',
    caption: 'Live process monitoring with memory consumption and runtime state visibility.',
    dark: '/images/task-manager-black.jpg',
    light: '/images/task-manager-white.jpg',
  },
  {
    num: '06',
    title: 'Updates',
    caption: 'Track app versions and detect recently updated packages with update timestamps.',
    dark: '/images/update-black.jpg',
    light: '/images/update-white.jpg',
  },
  {
    num: '07',
    title: 'Storage Insights',
    caption: 'Deep storage analytics—app size breakdown, cache usage, data footprint.',
    dark: '/images/storage-insights-black.jpg',
    light: '/images/storage-insights-white.jpg',
  },
  {
    num: '08',
    title: 'Usage Statistics',
    caption: 'System-level usage data showing when and how often apps are accessed.',
    dark: '/images/usage-statistics-black.jpg',
    light: '/images/usage-statistics-white.jpg',
  },
  {
    num: '09',
    title: 'App Details',
    caption: 'Comprehensive app profiles with signatures, permissions, and technical metadata.',
    dark: '/images/app-details-black.jpg',
    light: '/images/app-details-white.jpg',
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
    title: 'Open Source by Default',
    description: 'The entire codebase is MIT licensed and available on GitHub. No black boxes, no proprietary detection logic. Community contributions welcome.',
    stat: '100%',
    statLabel: 'Source Available',
  },
  {
    icon: Lock,
    title: 'Offline-First Privacy',
    description: 'Zero network requests. Zero analytics. Zero tracking. Your app list and analysis results never leave your device. Ever.',
    stat: 'Zero',
    statLabel: 'Data Collection',
  },
];

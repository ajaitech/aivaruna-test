/**
 * AIVARUNA Design System
 * 
 * Created by: ARAVIND JAYAMOHAN
 * Organization: Aivibe Software Services Pvt Ltd
 * Copyright © 2024 - All Rights Reserved
 * 
 * Premium Paper-Themed Design System for TypeScript Applications
 * 
 * @package @aivibe/aivaruna
 * @version 2.0.0
 * @license SEE LICENSE IN LICENSE
 * @author ARAVIND JAYAMOHAN <aravind@aivibe.in>
 */

// Theme System
export { ThemeProvider, useTheme } from '../contexts/ThemeContext';

// Core Paper Components
export { PaperButton } from '../components/PaperButton';
export { PaperCard } from '../components/PaperCard';
export { PaperInput } from '../components/PaperInput';
export { PaperModal } from '../components/PaperModal';
export { PaperDialog } from '../components/PaperDialog';
export { PaperAlert } from '../components/PaperAlert';
export { PaperBadge } from '../components/PaperBadge';

// Interactive Components
export { FlippingText } from '../components/FlippingText';
export { AuthModal } from '../components/AuthModal';
export { PaymentModal } from '../components/PaymentModal';
export { MegaMenu } from '../components/MegaMenu';
export { ContentModal } from '../components/ContentModal';

// Layout Components
export { LandingLayout } from '../components/layouts/LandingLayout';
export { StudioLayout } from '../components/layouts/StudioLayout';

// Feature Components
export { PricingPage } from '../components/PricingPage';
export { ArchitectureDiagram } from '../components/ArchitectureDiagram';
export { BlogDashboard } from '../components/BlogDashboard';
export { BlogPostView } from '../components/BlogPostView';
export { BlogCard } from '../components/BlogCard';
export { CommentSection } from '../components/CommentSection';
export { StarRating } from '../components/StarRating';

// Animated Icons
export {
  CloudIcon,
  AIBrainIcon,
  DatabaseIcon,
  ServerIcon,
  EdgeFunctionIcon,
  LoadingSpinner,
  MonitoringIcon,
  SecurityShieldIcon,
  RocketIcon,
  CostSavingIcon,
  MultiTenantIcon,
  SuccessCheckIcon,
  ErrorCrossIcon,
  WarningIcon,
  InfoIcon,
} from '../components/AnimatedIcons';

// Notification System
export { NotificationProvider, useNotification } from '../components/NotificationSystem';

// Hooks
export { useScrollReveal } from '../hooks/useScrollReveal';

// Types
export type { Theme, ThemeContextType } from '../contexts/ThemeContext';
export type { PaperButtonProps } from '../components/PaperButton';
export type { PaperCardProps } from '../components/PaperCard';
export type { PaperInputProps } from '../components/PaperInput';

/**
 * AIVARUNA Design System
 * 
 * A comprehensive dual-themed UI package featuring:
 * - Paper-themed components with authentic textures
 * - Complete light/dark mode with theme inversion
 * - Handwritten Patrick Hand font
 * - GSAP-style professional animations
 * - Zero black colors (uses very dark red #1a0000)
 * - 3D hover effects and white shining borders
 * - Responsive mobile-first design
 * 
 * For full documentation, visit: https://aivaruna.aivibe.in/docs
 * For support, email: aravind@aivibe.in
 */

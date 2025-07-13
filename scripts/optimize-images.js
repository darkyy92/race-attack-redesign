#!/usr/bin/env node

/**
 * Image Optimization Script for Race Attack Redesign
 * 
 * This script optimizes all images in the public folder to AVIF format
 * while preserving the originals for browser fallback support.
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { optimizeToAvif } from '../src/utils/image-optimizer/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

/**
 * Main optimization function
 */
async function optimizeProjectImages() {
  console.log('🖼️  Starting image optimization for Race Attack project...\n');
  
  const publicDir = join(projectRoot, 'public');
  
  try {
    // Optimize all images in public folder recursively
    await optimizeToAvif(publicDir, {
      recursive: true,
      quality: 60,           // Good balance for web
      maxWidth: 1200,        // Perfect for web responsive images
      maxHeight: 1200,
      preserveOriginal: true, // Keep originals as fallback
      concurrency: 4,        // Parallel processing
      excludePatterns: [
        // Exclude favicons and touch icons
        '**/favicon*',
        '**/apple-touch-icon*',
        '**/icon-*',
        '**/og-image*',
        '**/placeholder*',
        // Exclude already optimized or special files
        '**/*.avif',
        '**/*.svg',
        // Exclude lovable uploads (might be temporary)
        '**/lovable-uploads/**'
      ],
      verbose: true
    });
    
    console.log('\n✅ Image optimization completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Update image references in components to use <picture> elements');
    console.log('2. Test the optimized images in your application');
    console.log('3. Consider running this script as part of your build process');
    
  } catch (error) {
    console.error('❌ Error during image optimization:', error.message);
    process.exit(1);
  }
}

// Run the optimization
if (import.meta.url === `file://${process.argv[1]}`) {
  optimizeProjectImages();
}

export { optimizeProjectImages };
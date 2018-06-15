import CMS from 'netlify-cms'

import HomePagePreview from './preview-templates/HomePagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

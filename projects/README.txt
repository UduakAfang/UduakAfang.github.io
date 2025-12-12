HOW TO ADD PROJECTS TO YOUR PORTFOLIO
=======================================

This guide explains how to add your projects using simple text files.

FOLDER STRUCTURE
----------------
projects/
├── selected-works/    (Your 4 best projects)
├── visualizations/    (Your dashboards - 6 slots)
├── webapps/           (Your web apps - 6 slots)
└── gallery/           (Experimental work - 6 slots)

ADDING A PROJECT
----------------
1. Go to the project folder (e.g., projects/selected-works/project-1/)

2. Edit the info.txt file:
   - Replace the text after each colon (:)
   - Keep the field names exactly as they are (TITLE:, DESCRIPTION:, etc.)
   - Example:
     TITLE: Sales Dashboard Analysis
     DESCRIPTION: Built an interactive Tableau dashboard tracking sales across 50 stores.
     TECH: Tableau, SQL, Python
     DATE: March 2024
     LINK: https://public.tableau.com/your-dashboard
     GITHUB: https://github.com/yourusername/project
     TAGS: dashboard, sales, analytics

3. Add images to the images/ folder:
   - thumbnail.jpg (required - shows on the card)
   - screenshot-1.jpg, screenshot-2.jpg (optional - for future gallery)

   Image tips:
   - Use JPG or PNG format
   - Recommended size: 800x600px or similar aspect ratio
   - Keep file sizes under 500KB for faster loading

4. Save the info.txt file

5. Refresh your website - the project will appear automatically!

TIPS
----
- If you don't have a link or GitHub, leave it blank (e.g., LINK: )
- You can leave projects as templates if you're not ready to fill them in
- Only projects with actual content (not templates) will show up
- The system reads all info.txt files automatically

CATEGORIES EXPLAINED
--------------------
- selected-works: Your 4 best projects (shows on main page)
- visualizations: Dashboards and data visualizations
- webapps: Web applications you've built
- gallery: Experimental or creative work

TESTING YOUR CHANGES
--------------------
1. Open your portfolio in a web browser
2. Check that your project appears with the correct image
3. Click on the project card to see the full details in a popup
4. Make sure all links work

TROUBLESHOOTING
---------------
Problem: Project doesn't show up
- Make sure you edited info.txt (not just saved it)
- Check that TITLE field has actual content (not "Your Project Title Here")
- Verify thumbnail.jpg exists in the images folder

Problem: Image doesn't display
- Check the file name is exactly "thumbnail.jpg" (lowercase)
- Make sure the image is in the correct images/ folder
- Try a different image file

Problem: Modal doesn't open when clicking
- Refresh the browser with Ctrl+F5 (hard refresh)
- Check browser console for errors (F12)

Need help? Contact Claude or check the project files.

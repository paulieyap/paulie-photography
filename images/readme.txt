Drop your photos into this folder with these exact filenames, then re-deploy:

images/hero.jpg      - signature photo shown in the top hero (about 800x400px or larger)
images/portrait.jpg  - a portrait of you, for the About section (portrait orientation, ~600x800px)
images/work-1.jpg     through images/work-6.jpg - your six gallery photos (any consistent aspect ratio, ~800x600px works well)

Then in index.html, find each gray dashed placeholder box (search for "ph") and swap it for a real <img> tag, e.g.:

  <div class="ph grayscale" style="height: 400px;">
    <span>Replace this box with &lt;img src="images/hero.jpg"&gt; ...</span>
  </div>

becomes:

  <img src="images/hero.jpg" alt="Signature photo" style="width:100%;height:400px;object-fit:cover;" class="grayscale">

(keep the grayscale class only on hero/portrait -- the gallery photos should stay in color)

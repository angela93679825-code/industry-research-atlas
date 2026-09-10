# Upload this package to GitHub

## 1. Fill in the page shown in your screenshot

- **Repository name:** `industry-research-atlas`
- **Description:** `Evidence-based bilingual industry research atlas with supplier/customer maps, product outlooks and conditional risk scenarios.`
- **Visibility:** Public if you want everyone to access the sharing edition.
- Leave the generated README, .gitignore and license choices off: the package already contains these files.
- Click **Create repository**.

These are GitHub's repository creation controls. [Official creation instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

## 2. Upload the extracted contents

1. Download and unzip `Industry_Research_Atlas_GitHub.zip` on your computer.
2. Open the extracted `industry-research-atlas` folder.
3. In the empty GitHub repository, choose **uploading an existing file**, or **Add file → Upload files** when a file list is present.
4. Drag the folder's **contents** into the upload area: `index.html`, both READMEs, `LICENSE`, `NOTICE.md`, `src`, `data`, `scripts`, `tests`, `skills` and `docs`. Preserve those folders. Do not upload the ZIP as the only repository file, and do not nest everything under an extra parent folder.
5. Enter `Release industry atlas v1.0.0` as the commit message and commit the upload. If GitHub proposes a branch, complete the pull-request merge.
6. Verify that `index.html` is visible at the repository root.

The browser supports folders, up to 100 files per upload and 25 MiB per file. This package is below those limits. Mac Finder can reveal `.gitignore` and `.nojekyll` with **Command + Shift + .**. [Official upload instructions](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

## 3. Make the HTML viewable as a website

In the repository select **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then **main** and **/(root)**, and save. Use the published URL that GitHub reports after deployment. With your screenshot's account and the suggested repository name, the expected address is:

`https://angela93679825-code.github.io/industry-research-atlas/`

This address has not been deployed or verified by this package. GitHub may require enabling Pages or resolving a build message first. [Official Pages publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## 4. What other people can reuse

- The website: share the Pages URL after it is published.
- The source and workflow: share the repository URL; others can Fork or use Code → Download ZIP.
- The skill: share the entire `skills/industry-research-atlas/` folder. Recipients use their agent's supported installation method or ask an assistant to read its instructions and assets.

A public repository does not automatically install a ChatGPT skill or execute research. An assistant with source/file access is still required to research another industry.

## Optional command-line upload

Use this only inside the extracted folder, after creating an empty repository. If the folder is already a Git checkout, do not initialize it again. Authenticate through GitHub's normal supported flow; do not place a token in these commands or in HTML.

```bash
git init -b main
git add .
git commit -m "Release industry atlas v1.0.0"
git remote add origin https://github.com/angela93679825-code/industry-research-atlas.git
git push -u origin main
```

Change the account/repository if you chose a different name. The package has not created a repository, pushed code, or published a site for you.

## 简体中文速查

1. 仓库名填 `industry-research-atlas`，公开分享选择 Public，README / .gitignore / License 不自动生成，点击创建。
2. 解压 ZIP，上传 `industry-research-atlas` **里面的内容**，不是只上传 ZIP，也不要再多套一层文件夹。
3. 提交后确认根目录能看到 `index.html`。
4. 在 Settings → Pages 中选择 Deploy from a branch → main → /(root) → Save。
5. 等 GitHub 显示发布成功后分享网页链接；要分享技能，请提供整个 `skills/industry-research-atlas/` 文件夹。
6. 修改代码或数据后运行 `python3 scripts/build.py` 重新生成 `index.html`，再上传变更。

<script setup>
import HomeContent from '@theme/HomeContent.vue'
import HomeFooter from '@theme/HomeFooter.vue'
import Navbar from '@theme/Navbar.vue'

</script>

<template>
  <main>
    <Navbar />
    <div style="width:100%">
        <div class="main-items"><img src="/images/logo-large.png" class="main-logo" alt="Kele Pool"> </div>
                <div class="line-small"></div>
        <div class="social-items">
          <div><a href="https://t.me/tbirdai" target="_blank"><img src="/images/telegram.png" class="social-logo" alt="telegram"> </a></div>
          <div><a href="https://twitter.com/tbirdai" target="_blank"><img src="/images/twitter.png" class="social-logo" alt="twitter"> </a></div>
        </div>
        <div class="line-large"></div>
        <div class="feature-items">
          <div>
            <div><RouterLink :to="$page.frontmatter.guideUrl" ><img src="/images/guide.png" class="feature-logo" ></RouterLink></div>
            <div style="padding:10px">
              <div>
                <RouterLink :to="$page.frontmatter.guideUrl" class="feature-text">{{$page.frontmatter.guideName}} <img src="/images/arrow.png" class="feature-arrow" ></RouterLink>
              </div>
            </div>
          </div>
          <div>
            <div><RouterLink :to="$page.frontmatter.noticeUrl" ><img src="/images/notice.png" class="feature-logo" ></RouterLink></div>
            <div style="padding:10px">
              <div>
                <RouterLink :to="$page.frontmatter.noticeUrl" class="feature-text">{{$page.frontmatter.noticeName}} <img src="/images/arrow.png" class="feature-arrow" ></RouterLink>
              </div>
            </div>
          </div>
                    <div>
            <div><RouterLink :to="$page.frontmatter.wikiUrl" ><img src="/images/wiki.png" class="feature-logo" ></RouterLink></div>
            <div style="padding:10px">
              <div>
                <RouterLink :to="$page.frontmatter.wikiUrl" class="feature-text">{{$page.frontmatter.wikiName}} <img src="/images/arrow.png" class="feature-arrow" ></RouterLink>
              </div>
            </div>
          </div>
                    <div>
            <div><RouterLink :to="$page.frontmatter.developerUrl" ><img src="/images/developer.png" class="feature-logo"></RouterLink></div>
            <div style="padding:10px">
              <div>
                <RouterLink :to="$page.frontmatter.developerUrl" class="feature-text">{{$page.frontmatter.developerName}} <img src="/images/arrow.png" class="feature-arrow" ></RouterLink>
              </div>
            </div>
          </div>
        </div>
    </div> 

    <HomeContent />
  </main>
</template>

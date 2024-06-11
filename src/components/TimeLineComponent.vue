<template>
  <div class="timeline">
    <div class="container">
      <div class="timeline-content">
        <div class="year">1</div>
        <div class="left wow fadeInLeftBig">
          <div class="content">
            <h3>Requirement Gathering</h3>
            <p>
              Our Pre-sales Consulant in Abu dhabi is avilable to understand the
              development modules. He understands all the possibilites from the
              client to make sure smooth development phase.
            </p>
          </div>
        </div>
        <div class="year">2</div>

        <div class="right wow fadeInRightBig">
          <div class="content">
            <h3>Analysis Design</h3>
            <p>
              We sit with the pre sales team to understand & to Investigate the
              problem and requirements, rather than a solution. Design
              emphasizes a conceptual solution that fulfills the requirements,
              rather than its implementation.
            </p>
          </div>
        </div>
        <div class="year">3</div>
        <div class="left wow fadeInLeftBig">
          <div class="content">
            <h3>Quick Mock Up</h3>
            <p>
              Design team shares the 2 segment of Mock Up theme to the client
              for the confrimation on layouts and design. there will be static
              design templates for the development based on the requirment. Once
              the colour code is confired there will be accepteance stage.
            </p>
          </div>
        </div>
        <div class="year">4</div>

        <div class="right wow fadeInRightBig">
          <div class="content">
            <h3>Content Audit</h3>
            <p>
              Based on the requirment the conent team will design the conent for
              the pages and other segment they make sure it SEO freindly conent
              for region, Now we have 2 segment the design team member will
              allocate the images that will be used for the sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
/* Time Line  */

.timeline {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #eee;
}
.timeline .timeline-content {
  position: relative;
  display: flex;
  flex-direction: column;
}
.timeline .timeline-content .year {
  width: fit-content;
  z-index: 2;
  position: relative;
  background-color: var(--main-color);
  margin: 20px auto;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  padding: 2px 5px;
  font-weight: bold;
}
.timeline .left,
.right {
  width: calc(50% - 25px);
  /*25px : content::before(-20px) & content::before(-35px) */
  /* margin-bottom: 40px; */
  position: relative;
}
.timeline .content {
  padding: 20px;
  background-color: #fff;
}
.timeline .timeline-content h3 {
  font-weight: bold;
  color: var(--main-color);
  margin: 0 0 10px;
}
.timeline .timeline-content p {
  color: #666;
  margin: 0;
  line-height: 1.6;
}

.timeline .timeline-content .left .content ::before {
  content: "";
  position: absolute;
  border-width: 10px;
  border-style: solid;
  border-color: transparent transparent transparent #fff;
  right: -20px;
  top: 20px;
}

.timeline .timeline-content .right {
  align-self: flex-end;
}
.timeline .timeline-content .right .content::before {
  content: "";
  border-style: solid;
  border-width: 10px;
  border-color: transparent #fff transparent transparent;
  height: 0;
  width: 0;
  position: absolute;
  left: -20px;
  top: 20px;
  box-sizing: initial;
}

.timeline .timeline-content .left::before {
  right: -35px;
}
.timeline .timeline-content .right::before {
  left: -35px;
}

.timeline-content:before {
  position: absolute;
  content: "";
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--main-color);
  height: 100%;
  width: 2px;
}

@media (max-width: 767px) {
  .timeline .timeline-content .left,
  .timeline .timeline-content .right {
    width: 100%;
    margin-bottom: 20px;
  }
  .timeline .timeline-content .left:before,
  .timeline .timeline-content .right:before {
    display: none;
  }
  .timeline .timeline-content .left .content:before,
  .timeline .timeline-content .right .content:before {
    display: none;
  }
}
</style>

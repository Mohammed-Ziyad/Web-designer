<template>
  <div class="skills" ref="skills">
    <div class="container">
      <h2 class="main-heading wow bounceInDown">Our Skills</h2>
      <div
        class="skill-box wow"
        v-for="skill in skills"
        :key="skill.name"
        :class="{ fadeInLeftBig: skill.id % 2 == 0 }"
      >
        <div class="skill-name">{{ skill.name }}</div>
        <div class="skill-progress">
          <span
            class=""
            :style="skillStyle(skill)"
            :data-progress="skill.progress"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { name: "HTML", progress: "95%", visible: false, id: 1 },
        { name: "CSS", progress: "95%", visible: false, id: 2 },
        { name: "Bootstrap", progress: "80%", visible: false, id: 3 },
        { name: "TailwindCss", progress: "70%", visible: false, id: 4 },
        { name: "JavaScript", progress: "70%", visible: false, id: 5 },
        { name: "TypeScript", progress: "80%", visible: false, id: 6 },
        { name: "Vue js", progress: "80%", visible: false, id: 7 },
        { name: "Angular", progress: "70%", visible: false, id: 8 },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const skillsOffsetTop = this.$refs.skills.offsetTop;
      const skillsOuterHeight = this.$refs.skills.offsetHeight;
      const windowHeight = window.innerHeight;
      const windowScrollTop = window.scrollY;

      if (
        windowScrollTop >
        skillsOffsetTop + skillsOuterHeight - windowHeight
      ) {
        this.skills.forEach((skill) => {
          skill.visible = true;
        });
      }
    },
    skillStyle(skill) {
      return {
        width: skill.visible ? skill.progress : "0",
        transition: "width 0.3s",
      };
    },
  },
};
</script>

<style scoped lang="scss">
.skills {
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #eee;
  .container {
    display: flex;
    flex-wrap: wrap;
    & .skill-box {
      width: 100%;
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 15px;
      margin-bottom: 15px;
      .skill-name {
        font-weight: bold;
        width: 140px;
        text-align: center;
        line-height: 30px;
      }
      @media (max-width: 767px) {
        .skill-name {
          width: 100%;
          margin-bottom: 15px;
        }
      }
      .skill-progress {
        height: 30px;
        flex: 1;
        background-color: #f6f6f6;
        border-radius: 6px;
        position: relative;
        overflow: hidden;
        & span {
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 100%;
          background-color: var(--main-color);
          transition: all 0.5s;
        }
      }
      @media (max-width: 767px) {
        .skill-progress {
          flex: none;
        }
      }
    }
    @media (max-width: 767px) {
      .skill-box {
        flex-direction: column;
        align-items: stretch;
      }
    }
  }
}
</style>

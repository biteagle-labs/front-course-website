import React from 'react';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

export const sections = [
  {
    id: 'hero',
    name: '学校首页',
  },
  {
    id: 'values',
    name: '办学理念',
  },
  {
    id: 'programs',
    name: '开始学习',
    type: 'dropdown',
    items: [
      {
        label: 'Web3 运营学习手册',
        to: '/docs/web3-operation/learning-manual/intro',
      },
      // {
      //   label: 'Web3 开发工程师课程',
      //   to: '/docs/web3-development/intro',
      // },
    ],
  },
  {
    id: 'about',
    name: '学校概况',
  },
  {
    id: 'recruit',
    name: '招生就业',
  },
  {
    id: 'life',
    name: '校园生活',
  },
  {
    id: 'cooperation',
    name: '合作交流',
  },
];

const Home = () => {
  return (
    <Layout title="比特鹰社会大学 - 实践为王，成长为本">
      <main className={styles.main}>
        {/* 英雄区域 */}
        <section id="hero" className={styles.heroSection}>
          <div className={styles.heroBackground}>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              社会大学
            </h1>
            <p className={styles.heroSubtitle}>
              我们提供与时俱进的实战课程，助你学以致用，就业拿高薪。
            </p>
            <p className={styles.heroDescription}>
              社会大学不浪费你的四年，更不收你的学费。
            </p>
            <p className={styles.poweredBy}>Powered By Biteagle</p>
          </div>
        </section>

        {/* 办学理念区域 */}
        <section id="values" className={styles.valuesSection}>
          <div className={styles.valuesContainer}>
            <div className={styles.valuesGrid}>
              <div className={styles.valuesLeft}>
                <img src="/img/values.png" alt="办学理念" />
              </div>
              <div className={styles.valuesRight}>
                <div className={styles.sectionHeader}>
                  <h2 className={styles.sectionTitle}>办学理念</h2>
                  <p className={styles.sectionSubtitle}>Educational Philosophy</p>
                </div>
                <div className={styles.valueItem}>
                  <h3 className={styles.valueTitle}>社会大学校训</h3>
                  <p className={styles.valueDescription}>学以致用,自学成才</p>
                </div>
                <div className={styles.valueItem}>
                  <h3 className={styles.valueTitle}>时代痛点: AI浪潮下的教育与就业鸿沟</h3>
                  <p className={styles.valueDescription}>当前AI加速产业变革,传统教育却课程陈旧、实践脱节。</p>
                  <p className={styles.valueDescription}>4年大学,让千万学子陷入"毕业即失业"困境,例如2025届高校毕业生<span className={styles.highlightText}>1222万</span>人创新高,但毕业后,一大部分学子考研,一大部分学子考公,一大部分人报培训班继续学习。</p>
                  <p className={styles.valueDescription}>企业招不到人,毕业生找不到工作。</p>
                </div>
              </div>
            </div>

            <div className={styles.innovationsGrid}>
              <div className={styles.innovationItemCard}>
                <h4>办学革新</h4>
                <p>又实战又免费，最多学半年就去找工作！</p>
              </div>
              <div className={styles.innovationItemCard}>
                <h4>去冗余教育</h4>
                <p>打破 4 年学制，聚焦AI工具应用、Web3职业等前沿实战技能，3-6 个月模块化学习</p>
              </div>
              <div className={styles.innovationItemCard}>
                <h4>全免费体系</h4>
                <p>零学费、项目制教学</p>
              </div>
              <div className={styles.innovationItemCard}>
                <h4>动态迭代</h4>
                <p>紧跟 AI 技术更新课程，所学即市场所需。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 开设课程区域 */}
        <section id="programs" className={styles.programsSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>开设课程</h2>
              <p className={styles.sectionSubtitle}>Academic Programs</p>
            </div>
            <div className={styles.programsGrid}>
              <div className={styles.programCard}>
                <div className={styles.programContent}>
                  <h3>Web3编程课</h3>
                  <p>学习区块链开发、智能合约和DeFi，成为Web3核心技术人才。</p>
                  <div className={styles.programSkills}>
                    <span>Solidity</span>
                    <span>智能合约</span>
                    <span>DeFi</span>
                  </div>
                </div>
              </div>

              <div className={styles.programCard}>
                <div className={styles.programContent}>
                  <h3>Web3市场营销课</h3>
                  <p>掌握Web3营销策略，包括社区、内容和NFT营销，成为数字营销专家。</p>
                  <div className={styles.programSkills}>
                    <span>社区运营</span>
                    <span>内容营销</span>
                    <span>NFT营销</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.programNote}>
              <div className={styles.noteIcon}>🎉</div>
              <div className={styles.noteContent}>
                <h4>更多前沿课程正在开发中</h4>
                <p>我们持续关注行业发展趋势，不断开发新的课程内容，敬请期待！</p>
              </div>
            </div>
          </div>
        </section>

        {/* 学校概况区域 */}
        <section id="about" className={styles.aboutSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>学校概况</h2>
              <p className={styles.sectionSubtitle}>About Our University</p>
            </div>

            <div className={styles.aboutGrid}>
              <div className={styles.aboutMainContent}>
                <h3>社会大学</h3>
                <p>
                  成立于2025年，我们是一所专注于Web3与AI时代前沿技能的在线社会大学。我们没有宏伟的教学楼，只有这个网站和活跃的在线社群。我们坚信："大学者，非有大楼之谓也，有大师之谓也。"
                  在AI时代，最顶尖的知识已然在线化、全球化，任何人都可以通过网络跟随大师学习。因此，我们致力于打造最高效、最纯粹的学习模式。
                </p>
                <div className={styles.aboutStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>2025</span>
                    <span className={styles.statLabel}>成立年份</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>4+</span>
                    <span className={styles.statLabel}>专业课程</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>100%</span>
                    <span className={styles.statLabel}>免费教育</span>
                  </div>
                </div>
              </div>

              <div className={styles.aboutSidebar}>
                <div className={styles.sidebarItem}>
                  <div className={styles.sidebarIcon}>🌐</div>
                  <div className={styles.sidebarContent}>
                    <h4>学习平台</h4>
                    <p>我们提供QQ群和Telegram群作为主要交流平台。遇到问题随时提问，导师和同学都会热心帮助。</p>
                  </div>
                </div>
                <div className={styles.sidebarItem}>
                  <div className={styles.sidebarIcon}>🎓</div>
                  <div className={styles.sidebarContent}>
                    <h4>教育理念</h4>
                    <p>在AI时代，任何人通过网络都能获得大师级的知识。我们专注于提供高效的学习路径与实践机会。</p>
                  </div>
                </div>
                <div className={styles.sidebarItem}>
                  <div className={styles.sidebarIcon}>🤝</div>
                  <div className={styles.sidebarContent}>
                    <h4>共建生态</h4>
                    <p>欢迎全社会有识之士共建社会大学。无论是分享经验，还是参与课程开发，我们都热忱欢迎。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 招生就业区域 */}
        <section id="recruit" className={styles.recruitSection}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>招生就业</h2>
              <p className={styles.sectionSubtitle}>Admissions & Career</p>
            </div>

            <div className={styles.recruitIntro}>
              <h3>报考社会大学，帮你早日进社会！</h3>
              <p>我们不设门槛，不搞形式主义。只要你想学，想找到好工作，这里就欢迎你。</p>
            </div>

            <div className={styles.recruitGrid}>
              <div className={styles.recruitCard}>
                <div className={styles.recruitIcon}>🎯</div>
                <h4>招生原则</h4>
                <p>面向所有渴望通过实战技能改变命运的学习者。不问出处，只看未来。</p>
              </div>
              <div className={styles.recruitCard}>
                <div className={styles.recruitIcon}>🤔</div>
                <h4>在学人数</h4>
                <p>我们也不清楚。我们从不统计人数，因为我们更关心每个人的成长质量。你不是流水线上的产品。</p>
              </div>
              <div className={styles.recruitCard}>
                <div className={styles.recruitIcon}>💼</div>
                <h4>就业指导</h4>
                <p>自己学，自己找工作。我们提供真实世界的技能，你需要自己在BOSS直聘、拉勾等平台展示自己。学校只能帮你到这了。</p>
              </div>
              <div className={styles.recruitCard}>
                <div className={styles.recruitIcon}>🚀</div>
                <h4>我们的承诺</h4>
                <p>我们承诺提供完全免费、紧跟前沿的实战课程。你的成功，是你自己努力的最好证明。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 校园生活区域 */}
        <section id="life" className={styles.lifeSection}>
          <div className={styles.container}>
            <div className={styles.lifeGrid}>
              <div className={styles.lifeHeader}>
                <h2 className={styles.sectionTitle}>校园生活</h2>
                <p className={styles.sectionSubtitle}>Campus Life</p>
              </div>
              <div className={styles.lifeMainContent}>
                <h3>我们的校园，是不是有点眼熟？</h3>
                <p>没错，我们的"校园"就是无处不在的网络。</p>
                <p>没有固定的教室，但有更广阔的学习空间。</p>
                <p>在这里，生活就是学习，学习就是生活。</p>
                <p>我们相信，最纯粹的学习体验，来自于专注、协作和持续的自我驱动。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 合作交流区域 */}
        <section id="cooperation" className={styles.cooperationSection}>
          <div className={styles.cooperationContent}>
            <h2>合作交流</h2>
            <p>我们是一个开放的社区，欢迎任何形式的合作与交流。你可以通过以下方式找到我们：</p>
            <div className={styles.cooperationLinks}>

              <a target="_blank" rel="noopener noreferrer">Github</a>
              <a target="_blank" rel="noopener noreferrer">Telegram</a>
              <a target="_blank" rel="noopener noreferrer">QQ 交流群</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Home;

import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {


  web3OperationLearningManual: [
    {
      type: 'category',
      label: 'Web3 运营学习手册',
      link: {
        type: 'generated-index',
        title: "Web3 运营学习手册",
      },
      items: [
        'web3-operation/learning-manual/intro',
        'web3-operation/learning-manual/chapter-one/intro',
        {
          type: 'category',
          label: '学会讲叙事和造话题',
          link: {
            type: 'generated-index',
            title: '学会讲叙事和造话题',
            description: '叙事就是方向， 方向对了，传播才有力\n在 Web3，先让人记住你，才有可能让人参与你。\n\n不管是一个刚起步的想法，还是已经上线的项目，\n都必须找到一个足够吸引人、易于传播、有参与感的叙事，\n这才是能让项目走得远、传得开的第一步。'
          },
          items: [
            'web3-operation/learning-manual/chapter-two/01',
            'web3-operation/learning-manual/chapter-two/02',
            'web3-operation/learning-manual/chapter-two/03'
          ]
        },
        {
          type: 'category',
          label: '学会内容创作能力',
          link: {
            type: 'generated-index',
            title: "学会内容创作能力",
          },
          items: [
            'web3-operation/learning-manual/chapter-three/01',
            'web3-operation/learning-manual/chapter-three/02',
            'web3-operation/learning-manual/chapter-three/03',
            'web3-operation/learning-manual/chapter-three/04'
          ]
        },
        {
          type: 'category',
          label: '社群搭建与运营能力',
          link: {
            type: 'generated-index',
            title: "社群搭建与运营能力",
          },
          items: [
            'web3-operation/learning-manual/chapter-four/01',
            'web3-operation/learning-manual/chapter-four/02',
          ]
        },
        {
          type: 'category',
          label: '增长设计与用户激励机制',
          link: {
            type: 'generated-index',
            description:'在 Web3 运营中，增长的关键不是“花钱投广告”，而是用有限的资源，制定好一套有吸引力的“游戏规则”。\n让用户不仅是参与者，更成为你的推广者和共建者，一起把项目推向更大的人群。\n\n本章节将教大家怎么通过设计“任务 + 奖励机制”来吸引用户、留住用户、激活用户，从而让一个 Web3 项目从 0 到 1 实现增长。\n\n下面，我们将拆解一些实战中常用的增长策略和激励技巧。'
          },
          items: [
            'web3-operation/learning-manual/chapter-five/01',
            'web3-operation/learning-manual/chapter-five/02',
            'web3-operation/learning-manual/chapter-five/03',
            'web3-operation/learning-manual/chapter-five/04'
          ]
        },
        'web3-operation/learning-manual/chapter-six/intro'
      ]
    }
  ],
  web3Development: [
    {
      type: 'category',
      label: 'web3开发工程师课程',
      link: {
        type: 'generated-index',
        title: "web3开发工程师课程",
      },
      items: [
        'web3-development/intro',
        {
          type: 'category',
          label: '第一章：为什么要学区块链：应用场景与未来发展',
          link: {
            type: 'doc',
            id: 'web3-development/chapter-one/intro',
          },
          items: [
            'web3-development/chapter-one/01',
            'web3-development/chapter-one/02',
            'web3-development/chapter-one/03',
            'web3-development/chapter-one/04',
            'web3-development/chapter-one/05',
            {
              type: 'category',
              label: 'Web3 项目介绍',
              link: {
                type: 'doc',
                id: 'web3-development/chapter-one/06',
              },
              items: [
                'web3-development/chapter-one/chapter-one-six/01',
                'web3-development/chapter-one/chapter-one-six/02',
                'web3-development/chapter-one/chapter-one-six/03',
                'web3-development/chapter-one/chapter-one-six/04',
                'web3-development/chapter-one/chapter-one-six/05',
                'web3-development/chapter-one/chapter-one-six/06',
                'web3-development/chapter-one/chapter-one-six/07',
                'web3-development/chapter-one/chapter-one-six/08',
                'web3-development/chapter-one/chapter-one-six/09',
                'web3-development/chapter-one/chapter-one-six/10',
                'web3-development/chapter-one/chapter-one-six/11',
                'web3-development/chapter-one/chapter-one-six/12',
              ]
            },
            'web3-development/chapter-one/07',
            'web3-development/chapter-one/end',
          ]
        },
        {
          type: 'category',
          label: '第二章：区块链行业风险与监管：会不会犯法？',
          link: {
            type: 'doc',
            id: 'web3-development/chapter-two/intro',
          },
          items: [
            'web3-development/chapter-two/01',
            'web3-development/chapter-two/02',
            'web3-development/chapter-two/03',
            'web3-development/chapter-two/04',
            'web3-development/chapter-two/05',
            'web3-development/chapter-two/06',
            'web3-development/chapter-two/07',
            'web3-development/chapter-two/08',
            'web3-development/chapter-two/09',
          ]
        },
        {
          type: 'category',
          label: '第三章：爆发中的 Solana：技术、生态与开发实战',
          link: {
            type: 'doc',
            id: 'web3-development/chapter-three/intro',
          },
          items: [
            'web3-development/chapter-three/01',
            'web3-development/chapter-three/02',
            'web3-development/chapter-three/03',
            'web3-development/chapter-three/04',
            'web3-development/chapter-three/05',
            'web3-development/chapter-three/06',
            'web3-development/chapter-three/07',
            'web3-development/chapter-three/08',
            'web3-development/chapter-three/09',
            'web3-development/chapter-three/10',
            'web3-development/chapter-three/11',
            'web3-development/chapter-three/12',
            'web3-development/chapter-three/13',
            'web3-development/chapter-three/14',
            'web3-development/chapter-three/15',
            'web3-development/chapter-three/16',
            'web3-development/chapter-three/17',
            'web3-development/chapter-three/18',
            'web3-development/chapter-three/19',
            'web3-development/chapter-three/20',
            'web3-development/chapter-three/21',
          ]
        },
        {
          type: 'category',
          label: '第四章：Solidity 开发高手课',
          link: {
            type: 'doc',
            id: 'web3-development/chapter-four/intro',
          },
          items: [
            'web3-development/chapter-four/01',
            'web3-development/chapter-four/02',
            'web3-development/chapter-four/03',
            'web3-development/chapter-four/04',
            'web3-development/chapter-four/05',
            'web3-development/chapter-four/06',
            'web3-development/chapter-four/07',
            'web3-development/chapter-four/08',
            'web3-development/chapter-four/09',
            'web3-development/chapter-four/10',
            'web3-development/chapter-four/11',
            'web3-development/chapter-four/12',
            'web3-development/chapter-four/13',
            'web3-development/chapter-four/14',
            'web3-development/chapter-four/15',
            'web3-development/chapter-four/16',
            'web3-development/chapter-four/17',
            'web3-development/chapter-four/18',
            'web3-development/chapter-four/19',
            'web3-development/chapter-four/20',
            'web3-development/chapter-four/21',
          ]
        },
        {
          type: 'category',
          label: '第五章：未来新星 Move：智能合约实战',
          link: {
            type: 'doc',
            id: 'web3-development/chapter-five/intro',
          },
          items: [
            'web3-development/chapter-five/01',
            'web3-development/chapter-five/02',
            'web3-development/chapter-five/03',
            'web3-development/chapter-five/04',
            'web3-development/chapter-five/05',
            'web3-development/chapter-five/06',
            'web3-development/chapter-five/07',
            'web3-development/chapter-five/08',
            'web3-development/chapter-five/09',
            'web3-development/chapter-five/10',
            'web3-development/chapter-five/11',
            'web3-development/chapter-five/12',
            'web3-development/chapter-five/13',
            'web3-development/chapter-five/14',
            'web3-development/chapter-five/15',
            'web3-development/chapter-five/16',
            'web3-development/chapter-five/17',
            'web3-development/chapter-five/18',
            'web3-development/chapter-five/19',
            'web3-development/chapter-five/20',
            'web3-development/chapter-five/21',
          ]
        },
        {
          type: 'category',
          label: '第六章：掌握区块链安全',
          link: {
            type: 'doc',
            id: 'web3-development/chapter-six/intro',
          },
          items: [
            'web3-development/chapter-six/01',
            'web3-development/chapter-six/02',
            'web3-development/chapter-six/03',
            'web3-development/chapter-six/04',
            'web3-development/chapter-six/05',
            'web3-development/chapter-six/06',
            'web3-development/chapter-six/07',
            'web3-development/chapter-six/08',
            'web3-development/chapter-six/09',
            'web3-development/chapter-six/10',
            'web3-development/chapter-six/11',
            'web3-development/chapter-six/12',
            'web3-development/chapter-six/13',
            'web3-development/chapter-six/14',
            'web3-development/chapter-six/15',
            'web3-development/chapter-six/16',
            'web3-development/chapter-six/17',
            'web3-development/chapter-six/18',
            'web3-development/chapter-six/19',
            'web3-development/chapter-six/20',
            'web3-development/chapter-six/21',
          ]
        },
        'web3-development/chapter-seven/intro'
      ]
    }],

};

export default sidebars;

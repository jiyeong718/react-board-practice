import { rest } from 'msw';

export const handlers = [
  rest.get('list', (req, res, ctx) => {
    const limit = req.url.searchParams.get('limit')

    let list = [
      {
        id: 1,
        title: '게시글 1',
        content: '게시글1의 내용',
      },
      {
        id: 2,
        title: '게시글 2',
        content: '게시글2의 내용',
      },
      {
        id: 3,
        title: '게시글 3',
        content: '게시글3의 내용',
      },
    ];
    if (limit) {
      list = list.slice(0, limit)
    }

    return res(
      ctx.status (200),
      ctx.json({
        data: list,
      })
    );
  }),
];

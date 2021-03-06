import { Post } from '../core/models';

export const PostStub: Post = {
    id: '1',
    title: 'Post Title 1',
    body: `<p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, vero, obcaecati, aut, error quam
                sapiente nemo saepe quibusdam sit excepturi nam quia corporis eligendi eos magni recusandae laborum
                minus inventore?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, tenetur natus doloremque laborum quos iste
                ipsum rerum obcaecati impedit odit illo dolorum ab tempora nihil dicta earum fugiat. Temporibus,
                voluptatibus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde
                eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis.
                Enim, iure!
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, nostrum, aliquid, animi, ut quas
                placeat totam sunt tempora commodi nihil ullam alias modi dicta saepe minima ab quo voluptatem
                obcaecati?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, dolor quis. Sunt, ut, explicabo,
                aliquam tenetur ratione tempore quidem voluptates cupiditate voluptas illo saepe quaerat numquam
                recusandae? Qui, necessitatibus, est!
            </p>`,
    user: {
        name: 'Start Bootstrap',
        email: 'test@test.com',
    },
    image: 'http://placehold.it/750x300',
    createdAt: 1617737255523,
};

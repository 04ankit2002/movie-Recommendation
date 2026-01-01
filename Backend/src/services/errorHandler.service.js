export const errorHandler = async (error, request, reply) => {
  request.log.error(error);

  reply.code(500).send({
    message: "Internal Server Error"
  });
};

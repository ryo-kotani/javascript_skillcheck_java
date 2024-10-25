package in.tech_camp.javascript_skillcheck_java.repository;

import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import in.tech_camp.javascript_skillcheck_java.entity.ArticleEntity;

@Mapper
public interface ArticleRepository {
    @Select("select * from articles")
  List<ArticleEntity> findAll();

  @Insert("insert into articles (text) values (#{text})")
  void insert(ArticleEntity article);
}

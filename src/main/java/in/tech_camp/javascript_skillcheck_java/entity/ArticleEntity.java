package in.tech_camp.javascript_skillcheck_java.entity;

import java.sql.Timestamp;

import lombok.Data;

@Data
public class ArticleEntity {
  private Integer id;
  private String text;
  private Timestamp createdAt;
}
